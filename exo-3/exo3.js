// you can write js here
console.log("exo-3");

const options = ["rock", "paper", "scissors"];

var playerInput = prompt(
  "Your choice ( rock, paper, scissors) ?"
).toLowerCase();

function getPlayerChoice() {
  if (
    playerInput == "rock" ||
    playerInput == "paper" ||
    playerInput == "scissors" ||
    playerInput == "bomb"
  ) {
    return playerInput;
  } else {
    console.log("Syntaxe du choix par le joueur incorrect");
  }
}

function getComputerChoice() {
  return options[Math.floor(Math.random() * 3)];
}

function findWinner(playerChoice, computerChoice) {
  if (playerChoice === "bomb") {
    return "won";
  }
  if (playerChoice === computerChoice) {
    return "tied";
  } else if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      return "won";
    } else {
      return "lost";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      return "won";
    } else {
      return "lost";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      return "won";
    } else {
      return "lost";
    }
  }
}

function playGame() {
  const uChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  console.log("ordinateur : " + computerChoice, "// joueur : " + uChoice);
  console.log(findWinner(uChoice, computerChoice));
}

playGame();
