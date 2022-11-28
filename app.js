let playerScore = 0;
let computerScore = 0;
let runningScoreArray = [];
let buttons = document.querySelectorAll(".select-buttons");
let result = document.querySelector(".result");
let runningPlayerScore = document.querySelector('.player-score');
let runningComputerScore = document.querySelector('.computer-score')
let runningScoreContainer = document.querySelector('.running-score-container')
let textRunningScore = document.querySelector('.text-running-score')
let endText = document.querySelector('.end-text')

rerenderScore()



buttons.forEach((button) => {
  button.addEventListener("click", playGame);
});


function getComputerChoice() {
  //random num 1-3
  let randomNum = Math.floor(Math.random() * 3) + 1;
  //assign num to rock, paper, or scissors
  let choice =
    randomNum === 1
      ? "rock"
      : randomNum === 2
      ? "paper"
      : randomNum === 3
      ? "scissors"
      : "something when wrong";

  return choice;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function calcResults(playerChoice, computerChoice) {
  if (playerChoice.toLowerCase() === computerChoice)
    return `${capitalizeFirstLetter(computerChoice)} draw!`;

  switch (playerChoice.toLowerCase()) {
    case "paper":
      switch (computerChoice) {
        case "rock":
          playerScore++;
          return "Player wins! Paper beats Rock";
        case "scissors":
          computerScore++;
          return "PC wins! Scissors beats paper";
      }
    case "rock":
      switch (computerChoice) {
        case "paper":
          computerScore++;
          return "PC wins! Paper beats Rock";
        case "scissors":
          playerScore++;
          return "Player wins! Rock beats scissors";
      }
    case "scissors":
      switch (computerChoice) {
        case "paper":
          playerScore++;
          return "Player wins! Scissors beats paper";
        case "rock":
          computerScore++;
          return "PC wins! Rock beats scissors";
      }
  }
}

function rerenderScore(){
  runningPlayerScore.textContent = playerScore
  runningComputerScore.textContent = computerScore
}

function resetBoard() {
  endText.textContent = ''

  playerScore = 0;
  computerScore = 0;
  runningScoreArray = [];
  result.textContent = "";
  rerenderScore()
}

function playGame(e) {
  //after a previous game finished, pressing a button resets the board
  if (document.querySelector(".end-text").textContent) {
    resetBoard();
    return;
  }

  //calc result
  let playerChoice = e.target.textContent;
  let computerChoice = getComputerChoice();
  let resultText = calcResults(playerChoice, computerChoice);

  //push result to array and on DOM (result + running score)
  runningScoreArray.push(resultText);
  result.textContent = resultText;
  rerenderScore()



  //First to 5 Wins
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      endText.textContent = "Player Wins Bo5!";
    } else if (playerScore < computerScore) {
      endText.textContent = "Computer Wins Bo5!";
    } else {
      endText.textContent = "Something went terribly wrong";
    }
  }
}


