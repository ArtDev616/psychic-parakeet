/* eslint-disable no-console */
import {
  ApolloClient, ApolloLink, HttpLink, HttpOptions, InMemoryCache, split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { WebSocketLink } from '@apollo/client/link/ws';
import { BatchHttpLink } from '@apollo/client/link/batch-http';
import { getMainDefinition } from '@apollo/client/utilities';
import { getUserField, USER_ID_TOKEN_KEY } from 'contexts/user';
import unfetch from 'unfetch';

// Get endpoints
export const devLocal = false;
export const httpScheme = devLocal ? 'http' : 'https';
export const wsScheme = devLocal ? 'ws' : 'wss';
export const endpoint = devLocal
  ? process.env.REACT_APP_HASURA_LOCAL_ENDPOINT : process.env.REACT_APP_HASURA_PROD_ENDPOINT;
export const wsEndpoint = devLocal
  ? process.env.REACT_APP_HASURA_LOCAL_ENDPOINT : process.env.REACT_APP_HASURA_PROD_ENDPOINT;
export const httpURI = `${httpScheme}://${endpoint}/v1/graphql`;
export const wsURI = `${wsScheme}://${wsEndpoint}/v1/graphql`;

// Initialize cache
const cache = new InMemoryCache();

// Log errors
const errorLink = onError(({
  operation, response, graphQLErrors, networkError,
}) => {
  // Log GraphQL error with operation name + variables
  if (graphQLErrors) {
    console.log(
      `[GraphQL error]: Operation: ${operation.operationName}, Variables: ${JSON.stringify(operation.variables)}`,
    );
    graphQLErrors.map(({ message, locations, path }) => {
      return console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });
  }

  // Log network error
  if (networkError) {
    if (operation.operationName === 'featureGates') {
      if (response?.errors) {
        response.errors = undefined;
      }
      return;
    }
    console.log(`${operation.operationName} errored`);
    console.log('op query', JSON.stringify(operation.query));
    console.log('op variables', JSON.stringify(operation.variables));

    const responseErrors = String(response?.errors?.length || 0);
    if (response && responseErrors) {
      console.log(`Response had ${responseErrors} errors`);
      console.log('response', response);
    }

    console.log('network error', JSON.parse(JSON.stringify(networkError, ['message', 'arguments', 'type', 'name'])));
  }
});

// HTTP URL
const httpLinkOptions: HttpOptions = {
  uri: httpURI,
  // @ts-ignore
  fetch: unfetch,
};
const httpLink = new HttpLink(httpLinkOptions);

// Web socket link
const wsLink = new WebSocketLink({
  uri: wsURI,
  options: {
    reconnect: true,
    connectionParams: () => {
      const idToken = getUserField(USER_ID_TOKEN_KEY);

      // If not auth0 token, give unauthorized role
      if (!idToken) {
        return null;
      }

      // Return token
      return devLocal
        ? { headers: { 'x-hasura-admin-secret': 'hasuralocalsecret' } }
        : { headers: { Authorization: `Bearer ${idToken}` } };
    },
  },
});

// Authentication Link
const authLink = setContext(() => {
  const idToken = getUserField(USER_ID_TOKEN_KEY);

  // If not auth0 token, give unauthorized role
  if (!idToken) {
    return null;
  }

  // Return auth token
  return devLocal
    ? { headers: { 'x-hasura-admin-secret': 'hasuralocalsecret' } }
    : { headers: { Authorization: `Bearer ${idToken}` } };
});

// Batch link
const batchLink = new BatchHttpLink({
  ...httpLinkOptions,
  batchInterval: 10,
});

// Split link
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  split(
    operation => operation.getContext().important === true,
    httpLink,
    batchLink,
  ),
);

// Return client
export const client = new ApolloClient({
  cache,
  link: ApolloLink.from([authLink, errorLink, splitLink]),
});
