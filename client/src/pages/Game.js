import '../scss/App.css';
import React, { useEffect, useState } from 'react';
import LeftSideGame from '../components/LeftSideGame';
import RightSideGame from '../components/RightSideGame';
import EndGame from './EndGame';

let wordsGuessed = [];
export function clearWordsGuessed() { wordsGuessed = []; }

export default function Game(article) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 5);

  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  function enterWord() {
    var word = document.getElementById("wordBox").value.toLowerCase();
    if (wordsGuessed.indexOf(word) == -1) {
      wordsGuessed.push(word);

      var content = article.content.toLowerCase();
      if (content.includes(word)) {
        var wordOccurances = 0;
        while (content.includes(word)) {
          content = content.substring(content.indexOf(word) + word.length);
          wordOccurances++;
        }
        var lastIndex = 0;
        var realOccurances = 0;
        for (var x = 0; x < wordOccurances; x++) {
          var artCont = document.getElementById("artContent").innerHTML;
          var index = artCont.toLowerCase().indexOf(word, lastIndex);
          if ((index != 0 && !isLetter(artCont.charAt(index - 1))) && !isLetter(artCont.charAt(index + word.length))) {
            realOccurances++;
            document.getElementById("artContent").innerHTML = artCont.substring(0, index) + "<span class='text-black'>" + artCont.substring(index, index + word.length) + "</span>" + artCont.substring(index + word.length);
          }
          lastIndex = index + 32;
        }
        if (realOccurances > 0) {
          var wordScore = Math.round((word.length * 6) * (realOccurances / 6));
          setScore(score + wordScore);
          var pointAdd = document.getElementById("pointAdd");
          pointAdd.style.display = "block";
          pointAdd.innerHTML = "+" + wordScore;
          setTimeout(function () { pointAdd.classList.add("fade-out"); }, 500);
          setTimeout(function () { pointAdd.style.display = "none"; }, 1200);
        }
      }
    }
    document.getElementById("wordBox").value = "";
  }

  return (
    <div>
      <div id="gameScreen" className="absolute flex w-full h-full select-none bg-violet-700 ">
        { gameOver && <EndGame score={score} /> }
        <div
          id="pointAdd"
          className="hidden shadow2 text-yellow-800 z-10 absolute text-5xl w-36 h-24 rounded-xl bg-yellow-400 font-bold text-center">
            +400
        </div>
        <LeftSideGame article={article} score={score} time={time} gameOver={() => setGameOver(true)}  />
        <RightSideGame article={article} enterWord={enterWord} />
      </div>
    </div>
  );
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}