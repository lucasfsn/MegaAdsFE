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
      <Button text="Szukaj" />
    </div>
  </header>
);
