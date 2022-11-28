let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll(".select-buttons");
let result = document.querySelector(".result");
let runningPlayerScore = document.querySelector('.player-score');
let runningComputerScore = document.querySelector('.computer-score')
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
  result.textContent = "X";
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

  //render result to DOM (result + running score)
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