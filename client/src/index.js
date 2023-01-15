import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.css';
import App, { playNormal } from './App';

home();

document.getElementById("homeLogo").addEventListener("click", home);
document.getElementById("menu").addEventListener("click", menuDrop);
document.getElementById("menuNormal").addEventListener("click", playNormal);

function home(){
  document.getElementById("loader").style.display = "none";
  const screen = ReactDOM.createRoot(document.getElementById('screen'));
  screen.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

function menuDrop(){
  if (document.getElementById("menuDropdown").style.display == "none")
    document.getElementById("menuDropdown").style.display = "block";
  else
    document.getElementById("menuDropdown").style.display = "none";
}

export default home;
