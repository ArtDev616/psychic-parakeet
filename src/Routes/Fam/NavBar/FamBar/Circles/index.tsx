import React from 'react';
import Header from 'Routes/Fam/NavBar/FamBar/Circles/Header';
import CircleList from 'Routes/Fam/NavBar/FamBar/Circles/List';

type Props = Record<string, never>

const Circles: React.FunctionComponent<Props> = () => (
  <div>
    <Header />
    <CircleList />
  </div>
);

export default Circles;
