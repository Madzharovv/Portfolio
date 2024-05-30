import './App.css';
import React, { useState, useEffect } from 'react';
import { Navbar } from './Containers/index';
import { images } from '../src/constants/index';

const App = () => {
  const [themeMode, setThemeMode] = useState('Dark');
  const [imageSrc, setImageSrc] = useState(images.DarkThemeLogo);

  useEffect(() => {
    const mode = window.localStorage.getItem('mode');
    if (mode === 'light') {
      setThemeMode('Light');
      setImageSrc(images.LightThemeLogo);
      document.documentElement.classList.add('light');
    } else {
      setThemeMode('Dark');
      setImageSrc(images.DarkThemeLogo);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const changeTheme = document.getElementById('mode');
    const theme = document.getElementById('theme');
    if (themeMode === 'Light') {
      changeTheme.checked = true;
   
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      setImageSrc(images.LightThemeLogo);
    } else {
      changeTheme.checked = false;
 
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      setImageSrc(images.DarkThemeLogo);
    }
    window.localStorage.setItem('mode', themeMode.toLowerCase());
  }, [themeMode]);

  const toggleThemeMode = () => {
    setThemeMode((prevMode) => (prevMode === 'Dark' ? 'Light' : 'Dark'));
  };

  return (
    <div className="App">
      <div className="container">
        <label className="toggle_label">
          <input 
            type="checkbox" 
            id="mode" 
            className="toggle" 
            onChange={toggleThemeMode} 
            defaultChecked={themeMode === 'Light'}
          />
          <span className="slider round">
            <i className="fa-solid fa-moon fa-lg moon"></i>
            <i className="fa-solid fa-sun fa-lg sun"></i>
          </span>
        </label>
        <p id="theme"></p>
      </div>
      <div className="LogoContainer">
        <img className="logo" id="logoID" src={imageSrc} alt="Logo" width="75px"/>
      </div>
      <Navbar />
    </div>
  );
};

export default App;
