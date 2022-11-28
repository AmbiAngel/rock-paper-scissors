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

function resetBoard(){

    let oldRunningScore = document.querySelectorAll(".running-score-record");
    oldRunningScore.forEach((item) => {
      runningScore.removeChild(item);
    });
    runningScore.removeChild(document.querySelector(".end-text"));

    playerScore = 0;
    computerScore = 0;
    runningScoreArray = [];
    result.textContent = ''
  
}

function playGame(e) {

  if (document.querySelector(".end-text")) {
    resetBoard()
    return

  }


  let playerChoice = e.target.textContent;
  let computerChoice = getComputerChoice();
  let resultText = calcResults(playerChoice, computerChoice);
  runningScoreArray.push(resultText);
  result.textContent = resultText;

  // rerenderRunningScore()

  let newElement = document.createElement("p");
  newElement.classList.add("running-score-record");
  newElement.textContent = resultText;
  runningScore.appendChild(newElement);

  if (playerScore === 5 || computerScore === 5) {
    let endText = document.createElement("h2");
    if (playerScore > computerScore) {
      endText.textContent = "Player Wins Bo5!";
    } else if (playerScore < computerScore) {
      endText.textContent = "Computer Wins Bo5!";
    } else {
      endText.textContent = "Something went terribly wrong";
    }
    endText.classList.add("end-text");
    runningScore.appendChild(endText);
  }
}

// function rerenderRunningScore(){

//   runningScoreArray.forEach(item => {
//        let newItem = document.createElement('p')
//        newItem.classList.add('running-score-record')
//        newItem.textContent = item
//        runningScore.appendChild(newItem)
//   });

// }

// function playGameFiveTimes(){
//     let results = []
//     for(i=0; i<5; i++){
//         let round = playGame()
//         alert(round)
//         results.push(round)
//     }
//     return results
// }

let playerScore = 0;
let computerScore = 0;
let runningScoreArray = [];
let buttons = document.querySelectorAll(".select-buttons");
let result = document.querySelector(".result");
let runningScore = document.querySelector(".running-score");

buttons.forEach((button) => {
  button.addEventListener("click", playGame);
});
