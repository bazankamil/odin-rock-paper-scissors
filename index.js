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
  games(playRound("rock", getComputerChoice()));
});

paperButtonElement.addEventListener("click", function () {
  playerSelection = "paper";
  games(playRound("paper", getComputerChoice()));
});

scissorsButtonElement.addEventListener("click", function () {
  playerSelection = "scissors";
  games(playRound("scissors", getComputerChoice()));
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

function games(result) {
  if (playerScore === 5 || computerScore === 5) {
    alert("Game Over. Refresh browser to reset");
    return;
  }
  if (result.includes("Lose")) {
    resultDivElement.textContent = "You lose this match";
    computerScore += 1;
    scoreDivElement.textContent = `Computer Score = ${computerScore} Player Score = ${playerScore}`;
    console.log(`Computer Score = ${computerScore}`);
  } else if (result.includes("Win")) {
    resultDivElement.textContent = "You win this match!";
    playerScore += 1;
    scoreDivElement.textContent = `Computer Score = ${computerScore} Player Score = ${playerScore}`;
    console.log(`Player Score = ${playerScore}`);
  } else if (result.includes("Tie")) {
    resultDivElement.textContent = "Tie!";
  }
  if (playerScore === 5) {
    alert("You win the game!");
    winnerDivElement.textContent = "Player Wins!";
  }
  if (computerScore === 5) {
    alert("You lose the game!");
    winnerDivElement.textContent = "Computer Wins!";
  }
}

/*
TODO: 
-round counter
-show computer selecion + round message 
*/
