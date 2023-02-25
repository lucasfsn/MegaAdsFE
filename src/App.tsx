import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Map } from './components/Map/Map';
import { Wrapper } from './components/Wrapper/Wrapper';
import { SearchContext } from './contexts/search.context';

export const App = () => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <Wrapper>
        <Header />
        <Map />
      </Wrapper>
    </SearchContext.Provider>
  );
};
