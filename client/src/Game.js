import './scss/App.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import home from './index.js';
import { playNormal } from './App.js';
import { useTimer } from 'react-timer-hook';

let wordsGuessed = [];
export function clearWordsGuessed(){ wordsGuessed = []; }

export default function Game(article){

  document.getElementById("loader").style.display = "none";

  const time = new Date();
  time.setSeconds(time.getSeconds() + 120);
  function MyTimer({ expiryTimestamp }) {
    const {
      seconds, minutes
    } = useTimer({ expiryTimestamp, onExpire: () => endGame() });
    return (
      <div>
        <span>{minutes}</span>:<span>{seconds < 10 && '0'}{seconds}</span>
      </div>
    );
  }

  function endGame(){
    const endScreen = ReactDOM.createRoot(document.getElementById('insertEndGame'));
    endScreen.render(
      <div className="absolute h-full w-full">
        <div className="flex justify-center">
          <div className="text-7xl z-30 absolute top-40 text-violet-300 font-black leading-tight">Times Up!</div>
          <div className="text-4xl z-30 absolute top-80 text-yellow-200 font-bold leading-tight">Your score is:</div>
          <div id="endScore" className="text-9xl z-30 absolute bottom-72 text-yellow-400 font-black leading-tight">{score}</div>
          <div id="endBtns" className="flex absolute bottom-36">
            <div onClick={() => playNormal()} className="text-3xl z-30 text-center bg-violet-300 text-violet-900 font-bold rounded-xl p-3 mr-3">Play Again</div>
            <div onClick={() => home()} className="text-3xl z-30 text-center bg-violet-300 text-violet-900 font-bold rounded-xl p-3 ml-3">Exit To Menu</div>
          </div>
          <div className="absolute z-20 w-full h-full bg-black opacity-90"></div>
        </div>
      </div>
    );
  }
  
  const [score, setScore] = useState(0);

  function enterWord(){
    var word = document.getElementById("wordBox").value.toLowerCase();
    if (wordsGuessed.indexOf(word) == -1){
      wordsGuessed.push(word);
      var content = article.content.toLowerCase();
      if (content.includes(word)){
        var wordOccurances = 0;
        while (content.includes(word)){
          content = content.substring(content.indexOf(word) + word.length);
          wordOccurances++;
        }
        var lastIndex = 0;
        var realOccurances = 0;
        for (var x = 0; x < wordOccurances; x++){
          var artCont = document.getElementById("artContent").innerHTML;
          var index = artCont.toLowerCase().indexOf(word, lastIndex);
          if ((index != 0 && !isLetter(artCont.charAt(index - 1))) && !isLetter(artCont.charAt(index + word.length))){
            realOccurances++;
            document.getElementById("artContent").innerHTML = artCont.substring(0,index) + "<span class='text-black'>" + artCont.substring(index,index+word.length) + "</span>" + artCont.substring(index+word.length);
          }
          lastIndex = index + 32;
        }
        if (realOccurances > 0){
          var wordScore = Math.round((word.length * 6) * (realOccurances / 6));
          setScore(score + wordScore);
          var pointAdd = document.getElementById("pointAdd");
          pointAdd.style.display = "block"; 
          pointAdd.innerHTML = "+" + wordScore; 
          setTimeout(function(){ pointAdd.classList.add("fade-out"); }, 500);
          setTimeout(function(){ pointAdd.style.display = "none"; }, 1200);
        }
      }
    }
    document.getElementById("wordBox").value = "";
  }

  return (
    <div>
      <div id="gameScreen" className="absolute flex w-full h-full select-none bg-violet-700 ">

        {/* End game screen */}
        <div id="insertEndGame"></div>

        {/* Point addition showing */}
        <div id="pointAdd" className="hidden shadow2 text-yellow-800 z-10 absolute text-5xl w-36 h-24 rounded-xl bg-yellow-400 font-bold text-center">+400</div>

        {/* left side of game */}
        <div className="w-1/2 h-full">
          {/* time box */}
          <div className="absolute w-1/4 h-1/3">
            <div className="border-r-2 border-gray-600 text-2xl font-black border-b-2 text-center mt-20 p-3 bg-violet-400 select-none">Time</div>
            <div className="flex items-center justify-center border-r-2 border-gray-600 h-1/2 text-6xl font-black text-white bg-violet-900 select-none"><MyTimer expiryTimestamp={time} /></div>
          </div>
          {/* score box */}
          <div className="absolute w-1/4 h-1/3 right-1/2">
            <div className="text-2xl font-black border-b-2 border-gray-600 text-center mt-20 p-3 bg-violet-400 select-none">Score</div>
            <div className="flex items-center justify-center h-1/2 text-6xl font-black text-white bg-violet-900 select-none">{score}</div>
          </div>
          {/* picture box */}
          <div className="flex items-center justify-center h-2/3 absolute bottom-0 border-t-2 border-gray-600 bg-gray-800 w-1/2">
            <img src={article.src} className="object-cover border-2 border-white w-3/4 h-3/4"></img>
          </div>
        </div>

        {/* right side of game */}
        <div className="w-1/2 h-full border-l-2 border-gray-600">
          {/* article box */}
          <div className="w-full h-3/4 bg-white absolute top-20 overflow-y-scroll">
            <div className="text-3xl text-center pl-2 pr-4 pt-2 font-bold w-1/2">{article.title}</div>
            <div id="artContent" className="text-white h-3/4 w-1/2 pt-2 pl-4 pr-4">{article.content}</div>
          </div>
          {/* input box */}
          <div id="wordInput" className="border-t-2 border-gray-600 w-1/2 absolute bottom-0 bg-violet-400 flex justify-center">
            <input id="wordBox" className="p-3 text-3xl border-2 border-gray-600 h-2/3 w-2/3 mt-5" type="text"></input>
            <button onClick={() => enterWord()} id="enterBtn" className="text-3xl border-2 border-gray-600 font-bold text-white h-2/3 bg-violet-600 pl-5 pr-5 mt-5">Enter</button>
          </div>
        </div>

      </div>
    </div>
  );
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}