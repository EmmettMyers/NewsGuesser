import './scss/App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Game, { clearWordsGuessed } from './Game.js';

export default function App() {
  return (
    <div className="bg-violet-700 h-full w-full absolute top-20 flex justify-center">

      <div id="chooseTopicBox" className="hidden absolute h-full w-full select-none">
        <div className="flex justify-center">
          <div className="shadow2 border-4 border-white absolute top-40 z-30 w-80 h-96 bg-gray-400 rounded-lg text-center">
            <div onClick={() => closeTopic()} id="closeTopic" className="absolute right-1.5 top-0 text-white text-xl">X</div>
            <div className="bg-gray-800 text-white font-bold text-3xl p-3 rounded-t-lg">Choose a topic:</div>
            <div id="topicHolder" className="text-violet-700 font-bold text-3xl">
              <div onClick={() => play("business")} className="p-1.5 mt-2.5">Business</div>
              <div onClick={() => play("entertainment")} className="p-1.5">Entertainment</div>
              <div onClick={() => play("health")} className="p-1.5">Health</div>
              <div onClick={() => play("science")} className="p-1.5">Science</div>
              <div onClick={() => play("sports")} className="p-1.5">Sports</div>
              <div onClick={() => play("technology")} className="p-1.5">Technology</div>
            </div>
          </div>
          <div className="absolute z-20 w-full h-full bg-black opacity-90"></div>
        </div>
      </div>

      <div id="mottoScreen" className="z-10 text-center vert">
        <div id="mottoTxt" className="shadow2 font-bold text-7xl text-white pl-3 pr-3 select-none mt-8">See a news photo,<br />guess the words<br />in the article</div>
        <div className="flex justify-center mt-10">
          <div onClick={() => play()} className="bg-gray-800 mr-3 homeBtn">Play <span className="text-violet-400 font-black">Normal</span></div>
          <div onClick={() => pickTopic()} className="bg-gray-800 ml-3 homeBtn">Play by <span className="text-violet-400 font-black">Topic</span></div>
        </div>
      </div>
      <div className="z-10 vert">
        <img id="gameMenuImg" className="shadow2 bg-red-500 ml-24 border-2 border-gray-800 rounded-xl" src="ngShot.png" />
      </div>
      
      <img className="h-full w-full opacity-10 absolute top-0" src="https://mediaengagement.org/wp-content/uploads/2014/04/News_Site-600x398.jpg"></img>
    
    </div>
  );
}

export function pickTopic(){
  document.getElementById("chooseTopicBox").style.display = "block";
}
function closeTopic(){
  document.getElementById("chooseTopicBox").style.display = "none";
}

export function play(topic){
  var mode;
  topic == undefined ? mode = "normal" : mode = "topics";

  document.getElementById("chooseTopicBox").style.display = "none";
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

  fetch("/" + mode, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic: topic })
  }).then(res => res.json()).then(json => {
    var src = JSON.parse(json[0]);
    var title = JSON.parse(json[1]);
    var content = JSON.parse(json[2]);
    const screen = ReactDOM.createRoot(document.getElementById('screen'));
    clearWordsGuessed();
    screen.render(
      <Game src={src} title={title} content={content} mode={mode}/>
    );
  });
}