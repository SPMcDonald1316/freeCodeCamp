function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const index = Math.floor(Math.random() * options.length);
  return options[index];
}

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  )
}