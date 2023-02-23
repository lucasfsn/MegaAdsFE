import React from 'react';
import { Button } from '../common/Button';
import './Header.css';

export const Header = () => (
  <header className="header">
    <h1 className="header__title">
      <span className="title__bold">Mega</span> Ogłoszenia
    </h1>
    <Button text="Dodaj ogłoszenie" />
    <div className="header__search">
      <input type="text" />
      <button className="search__btn">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  </header>
);
