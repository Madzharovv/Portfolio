import './App.css';
import React,  { useState, Component } from 'react';
import { Navbar } from './Containers/index';
import { images } from '../src/constants/index';

const App = () => {
    //how to create a variable in react?
    const [themeMode, setThemeMode] = useState('Dark');
    const toggleThemeMode = () => {
      setThemeMode(prevMode => (prevMode === 'Dark' ? 'Light' : 'Dark'));
      const lightThemeLogo="images.LightThemeLogo"
      const darkThemeLogo="images.DarkThemeLogo"

  };
    return(

    <div className="App">
      <btn></btn>
    <div className='LogoContainer'>
          <img src=""></img>
          </div>
 <Navbar />
  </div>
  )
    
};


export default App;
