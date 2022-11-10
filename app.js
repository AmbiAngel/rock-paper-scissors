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

function calcResults(playerChoice, computerChoice) {
  switch (playerChoice.toLowerCase()) {
    case "paper":
      switch (computerChoice) {
        case "paper":
          return "draw!";
        case "rock":
          return "Player wins! Paper beats Rock";
        case "scissors":
          return "PC wins! Scissors beats paper";
      }
    case "rock":
      switch (computerChoice) {
        case "paper":
          return "PC wins! Paper beats Rock";
        case "rock":
          return "Draw! RvR";
        case "scissors":
          return "Player wins! Rock beats scissors";
      }
    case "scissors":
      switch (computerChoice) {
        case "paper":
          return "Player wins! Scissors beats paper";
        case "rock":
          return "PC wins! Rock beats scissors";
        case "scissors":
          return "Draw!";
      }
  }
}

function playGame() {
  let playerChoice = prompt("Rock, Paper, or Scissors?");
  let computerChoice = getComputerChoice();
  return calcResults(playerChoice, computerChoice);
}
