import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AddForm } from './components/AddForm/AddForm';
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
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/add" element={<AddForm />} />
        </Routes>
      </Wrapper>
    </SearchContext.Provider>
  );
};
