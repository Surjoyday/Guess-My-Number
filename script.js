"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let gameScore = 20;

let highScore = 0;

//! REPETATIVE TASK FUNCTIONS
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const setTextColor = function (theElement, color) {
  document.querySelector(theElement).style.color = color;
};

const displayScore = function (gameScore) {
  document.querySelector(".score").textContent = gameScore;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //! IF NO INPUT GIVEN
  if (!guess) {
    displayMessage("⛔️ No Number, Select a number b/w 1 & 20");

    //! IF PLAYES WINS
  } else if (guess === secretNumber) {
    displayMessage("🎊 Correct Number!");

    if (gameScore > highScore) {
      highScore = gameScore;
      document.querySelector(".highscore").textContent = highScore;
    }

    document.querySelector(".qmark").textContent = secretNumber;

    //! CSS STYLE CHANGES
    document.querySelector("body").style.backgroundImage =
      "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").style.background = "whitesmoke";
    document.querySelector("header").style.borderBottom =
      "7px solid whitesmoke";
    document.querySelector(".message").style.fontSize = "3rem";

    setTextColor(".qmark", "black");
    setTextColor("h1", "whitesmoke");
    setTextColor(".message", "whitesmoke");
    setTextColor(".between", "black");
    setTextColor(".label-score", "whitesmoke");
    setTextColor(".label-highscore", "whitesmoke");

    //! IF PLAYER GUSSED WRONG
  } else if (guess !== secretNumber) {
    if (gameScore > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High! " : "📉 Too Low!");
      displayScore(--gameScore);
    } else {
      displayMessage("😭 You lost the game!");
      displayScore(0);
      setTextColor("#iflost", "#FF0000");
      document.querySelector(".message").style.fontSize = "2.3rem";
    }
  }
});

//! Game Reset

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  gameScore = 20;

  document.querySelector(".guess").value = "";

  displayMessage("Start guessing...");

  displayScore(gameScore);

  document.querySelector(".qmark").textContent = "?";

  //! CSS RESET
  document.querySelector("body").style.background = "rgba(0, 0, 0, 0.736)";
  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".number").style.background = "rgb(2, 173, 54)";
  document.querySelector("header").style.borderBottom =
    "7px solid rgb(2, 173, 54)";
  document.querySelector(".message").style.fontSize = "2rem";

  setTextColor(".qmark", "#eee");
  setTextColor("h1", "rgb(2, 173, 54)");
  setTextColor(".message", "rgb(2, 173, 54)");
  setTextColor(".between", "rgb(2, 173, 54)");
  setTextColor(".label-score", "rgb(2, 173, 54)");
  setTextColor(".label-highscore", "rgb(2, 173, 54)");
});
