import React from 'react';
import './App.css';

export const App = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <h1 className="header__title">
          <span className="title__bold">Mega</span> Ogłoszenia
        </h1>
        <button className="btn">Dodaj ogłoszenie</button>
        <div className="header__search">
          <input type="text" />
          <button className="btn">Szukaj</button>
        </div>
      </header>
      <div className="map">...</div>
    </div>
  );
};
