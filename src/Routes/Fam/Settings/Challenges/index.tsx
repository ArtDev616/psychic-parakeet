import React from 'react';
import { RouteComponentProps } from 'react-router';

import SettingsChallengeSeries from 'Routes/Fam/Settings/Challenges/SeriesSection';
import SettingsCreateButtons from 'Routes/Fam/Settings/Challenges/CreateButtons';

type PathParamsType = {
  famAlphaName: string;
}

type Props = RouteComponentProps<PathParamsType>

const FamChallengeSettings: React.FunctionComponent<Props> = ({ match }) => {
  return (
    <>
      <SettingsCreateButtons />
      <SettingsChallengeSeries famAlphaName={match.params.famAlphaName} />
    </>
  );
};

export default FamChallengeSettings;
