import './scss/App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Game, { clearWordsGuessed } from './Game.js';

export default function App() {
  return (
    <div>
      <div className="bg-violet-700 h-full w-full absolute top-20 flex justify-center">
        <div id="mottoScreen" className="z-10 text-center vert">
          <div id="mottoTxt" className="shadow2 font-bold text-7xl text-white pl-3 pr-3 select-none mt-8">See a news photo,<br />guess the words<br />in the article</div>
          <div className="flex justify-center mt-10">
            <div onClick={() => playNormal()} className="bg-gray-800 mr-3 homeBtn">Play <span className="text-violet-400 font-black">Normal</span></div>
            <div className="bg-gray-800 ml-3 homeBtn">Play by <span className="text-violet-400 font-black">Topic</span></div>
          </div>
        </div>
        <div className="z-10 vert">
          <img id="gameMenuImg" className="shadow2 bg-red-500 ml-24 border-2 border-gray-800 rounded-xl" src="ngShot.png" />
        </div>
        <img className="h-full w-full opacity-10 absolute top-0" src="https://mediaengagement.org/wp-content/uploads/2014/04/News_Site-600x398.jpg"></img>
      </div>
    </div>
  );
}

export function playNormal(){
  document.getElementById("menuDropdown").style.display = "none";
  if (document.getElementById("mottoScreen")){
    document.getElementById("mottoScreen").style.display = "none";
    document.getElementById("gameMenuImg").style.display = "none";
  }
  else {
    ReactDOM.createRoot(document.getElementById('gameScreen')).render(
      <img className="h-full w-full opacity-10 absolute top-0" src="https://mediaengagement.org/wp-content/uploads/2014/04/News_Site-600x398.jpg"></img>
    );
  }
  document.getElementById("loader").style.display = "block";
  fetch('/news', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }).then(res => res.json()).then(json => {
    var src = JSON.parse(json[0]);
    var title = JSON.parse(json[1]);
    var content = JSON.parse(json[2]);
    const screen = ReactDOM.createRoot(document.getElementById('screen'));
    clearWordsGuessed();
    screen.render(
      <Game src={src} title={title} content={content}/>
    );
  });
}