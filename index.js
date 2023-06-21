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

//function playerSelection that take player input from prompt

let playerSelection;

function getPlayerChoice() {
  let answer;
  answer = prompt("Lets play!").toLowerCase();
  switch (answer) {
    case "rock":
      return (playerSelection = "rock");
      break;
    case "paper":
      return (playerSelection = "paper");
      break;
    case "scissors":
      return (playerSelection = "scissors");
      break;
    default:
      alert("Wrong answer");
      break;
  }
}

playerSelection = getPlayerChoice();

//function playRound - single round that take answer and printing a result

function playRound(playerSelection, computerSelection) {
  if (playerSelection == undefined) {
    return "You input wrong answer";
  } else if (playerSelection == computerSelection) {
    return "Tie!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You Win! Scissors beats Paper";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection == undefined) {
    return "You input wrong answer";
  }
}

//function game - 5 round game, first to get 5 points win

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let result = "";
  for (let i = 0; i < 20; i++) {
    console.log(i);
    computerSelection = getComputerChoice();
    getPlayerChoice = prompt("Lets play!").toLowerCase();
    result = playRound(playerSelection, computerSelection);
    if (result.includes("Lose")) {
      console.log("Lose");
      computerScore++;
    } else if (result.includes("Win")) {
      console.log("Win");
      playerScore++;
    } else if (result.includes("Tie")) {
      console.log("Tie");
    }

    console.log(`Player Score = ${playerScore}`);
    console.log(`Player Score = ${computerScore}`);
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
  }
}

game();

//TODO:
//bug- if wrong answer, playerSelection does not reset
//bug- test one wrong answer then good- playerSelection should reset each loop?
//bug- if prompt canceled (null) then all program broke
