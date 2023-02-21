import React from 'react';
import { Header } from './components/layout/Header';
import { Map } from './components/Map/Map';
import { Wrapper } from './components/Wrapper/Wrapper';

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <Map />
    </Wrapper>
  );
};
