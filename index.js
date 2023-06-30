//selectors

const rockButtonElement = document.querySelector(".header__rock");
const paperButtonElement = document.querySelector(".header__paper");
const scissorsButtonElement = document.querySelector(".header__scissors");

const resultDivElement = document.querySelector(".main__result");
const scoreDivElement = document.querySelector(".main__score");
const winnerDivElement = document.querySelector(".main__winner");

let result;

rockButtonElement.addEventListener("click", function () {
  playerSelection = "rock";
  playRound("rock", getComputerChoice());
  games();
});

paperButtonElement.addEventListener("click", function () {
  playerSelection = "paper";
  playRound("paper", getComputerChoice());
  games();
});

scissorsButtonElement.addEventListener("click", function () {
  playerSelection = "scissors";
  playRound("scissors", getComputerChoice());
  games();
});

//function getComputerChoice random return rock paper scissors

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    return "rock";
  } else if (random === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

let computerSelection = getComputerChoice();

//playerSelection from button

let playerSelection;

//function playRound - single round that take answer and printing a result

function playRound(playerSelection, computerSelection) {
  if (playerSelection == undefined) {
    return (result = "You input wrong answer");
  } else if (playerSelection == computerSelection) {
    return (result = "Tie!");
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return (result = "You Lose! Paper beats Rock");
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return (result = "You Win! Rock beats Scissors");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return (result = "You Win! Paper beats Rock");
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return (result = "You Lose! Scissors beats Paper");
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return (result = "You Win! Scissors beats Paper");
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return (result = "You Lose! Rock beats Scissors");
  } else if (playerSelection == undefined) {
    return (result = "You input wrong answer");
  }
}

//function game - 5 round game, first to get 5 points win

let playerScore = 0;
let computerScore = 0;

function games() {
  if (result.includes("Lose")) {
    console.log("Lose");
    computerScore += 1;
    console.log(`Computer Score = ${computerScore}`);
  } else if (result.includes("Win")) {
    console.log("Win");
    playerScore += 1;
    console.log(`Player Score = ${playerScore}`);
  } else if (result.includes("Tie")) {
    console.log("Tie");
  }
}
/*
    if (playerScore === 5) {
      console.log("You Win");
      alert("You Win!");
      break;
    }
    if (computerScore === 5) {
      console.log("You Lose!");
      alert("You Lose!");
      break;
    }
*/

//TODO:
//bug- if wrong answer, playerSelection does not reset
//bug- test one wrong answer then good- playerSelection should reset each loop?
//bug- if prompt canceled (null) then all program broke

//pod koniec rundy sprawdza, czy wynik jest rowny 5 i wtedy konczy i wyswietla wynik w 3 divie
//na poczatku rundy sprawdza czy wynik jest rowny 5 jesli tak nie robi nic
//result wyswietlany w 1 divie
//score aktualizowany w 2 divie

//stylizacja divov
//stylizacja buttonow
