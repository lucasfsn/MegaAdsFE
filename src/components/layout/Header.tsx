import React, { FormEvent, useContext, useState } from 'react';
import { SearchContext } from '../../contexts/search.context';
import { Button } from '../common/Button';
import './Header.css';

export const Header = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [inputVal, setInputVal] = useState(search);

  const setSearchFromLocalState = (e: FormEvent) => {
    e.preventDefault();
    setSearch(inputVal);
  };

  return (
    <header className="header">
      <h1 className="header__title">
        <span className="title__bold">Mega</span> Ogłoszenia
      </h1>
      <Button text="Dodaj ogłoszenie" />
      <form className="header__search" onSubmit={setSearchFromLocalState}>
        <input
          type="text"
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
        />
        <button className="search__btn">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </header>
  );
};
