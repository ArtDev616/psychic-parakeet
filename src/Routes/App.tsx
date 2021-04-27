import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import CreateFam from 'Routes/CreateFam';
import Fam from 'Routes/Fam';
import Collab from 'Routes/Collab';
import Logout from 'Routes/Logout';

const App: React.FunctionComponent<Record<string, never>> = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/logout" component={Logout} />
      <Route path="/create-fam" component={CreateFam} />
      <Route path="/collab" component={Collab} />
      <Route path="/:famAlphaName" component={Fam} />
    </Switch>
  </BrowserRouter>
);

export default App;
