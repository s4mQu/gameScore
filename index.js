"use strict";

let homeScore = 0;
let awayScore = 0;
const homeScoreDisplay = document.getElementById("home-score");
const awayScoreDisplay = document.getElementById("away-score");

// home Functions
function home(number) {
  homeScore = homeScore + number;
  homeScoreDisplay.innerText = homeScore;
}

// Away Function
function away(number) {
  awayScore = awayScore + number;
  awayScoreDisplay.innerText = awayScore;
}

// Reset function
function resetScore() {
  homeScore = 0;
  awayScore = 0;
  homeScoreDisplay.innerText = homeScore;
  awayScoreDisplay.innerText = awayScore;
}
