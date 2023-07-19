import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.css';
import Home from './pages/Home';
import Game from './pages/Game';
import Loading from './pages/Loading';
import Navbar from './components/Navbar';
import EndGame from './pages/EndGame';

setPage('home');

function setPage(page, data){
  const screen = ReactDOM.createRoot(document.getElementById('screen'));
  if (page == 'home'){
    screen.render(
      <React.StrictMode>
        <Navbar />
        <Home />
      </React.StrictMode>
    );
  } else if (page == 'loading'){
    screen.render(
      <React.StrictMode>
        <Navbar />
        <Loading />
      </React.StrictMode>
    );
  } else if (page == 'game'){
    screen.render(
      <React.StrictMode>
        <Navbar />
        <Game 
          src={data.src} 
          title={data.title} 
          content={data.content} 
          mode={data.mode}  
        />
      </React.StrictMode>
    );
  }
}

export default setPage;
