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
      const theme = document.getElementById('theme');
      const changeTheme = document.getElementById('mode');
      changeTheme.onchange = (e) => {
        if (changeTheme.checked === true) {
          console.log("Checked")
          theme.innerHTML="Light Theme"
          document.documentElement.classList.remove("dark")
          document.documentElement.classList.add("light")
          window.localStorage.setItem('mode', 'light');
        } else {
          console.log("Not Checked")
          theme.innerHTML="Dark Theme"
          document.documentElement.classList.remove("light")
          document.documentElement.classList.add("dark")
          window.localStorage.setItem('mode', 'dark');
        }
      }
      const mode = window.localStorage.getItem('mode');
      if (mode == 'dark') {
        changeTheme.checked = true;
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
      }
      
      if (mode == 'light') {
        changeTheme.checked = false;
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
      }
  };
    return(

    <div className="App">
      <div class="container">
  <label class="toggle_label">
    <input type="checkbox" id="mode" class="toggle"/>
    <span class="slider round">
      <i class="fa-solid fa-moon fa-lg  moon"></i>
      <i class="fa-solid fa-sun  fa-lg sun"></i>
    </span>
  </label>
  <p id="theme"></p>
</div>
    <div className='LogoContainer'>
          <img src=""></img>
          </div>
 <Navbar />
  </div>
  )
    
};


export default App;
