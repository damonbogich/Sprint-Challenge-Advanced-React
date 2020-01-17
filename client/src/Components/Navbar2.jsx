import React, { useState } from 'react';
import {useDarkMode2} from '../hooks/useDarkMode2';

const Navbar2 = () => {
  const [darkMode, setDarkMode] = useDarkMode2(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1 data-testid="womenSoccer">Women's Soccer!</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar2;