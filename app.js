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

function playGame(e) {
  let playerChoice = e.target.textContent
  console.log(e)
  let computerChoice = getComputerChoice();
  console.log(calcResults(playerChoice, computerChoice));
  return calcResults(playerChoice, computerChoice);
}

function playGameFiveTimes(){
    let results = []
    for(i=0; i<5; i++){
        let round = playGame()
        alert(round)
        results.push(round)
    }
    return results
}


let buttons = document.querySelectorAll('.select-buttons')

buttons.forEach(button =>{
  button.addEventListener('click', playGame)
})