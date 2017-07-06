import React from 'react';
import headerLogo from './compass-logo.svg';

export default () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <img src={headerLogo} className="header-logo" />
          <nav className="header-nav">
            <a className="header-link" href="#">Купить</a>
            <a className="header-link" href="#">Снять</a>	
            <a className="header-link" href="#">Наши агенты</a>	
          </nav>
        </div>
      </div>
    </header>
  );
};
