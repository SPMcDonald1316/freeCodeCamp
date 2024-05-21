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

function getRoundResults(userOption) {
  const computer = getRandomComputerResult();
  const outcome = hasPlayerWonTheRound(userOption, computer);

  if (outcome) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computer}`;
  } else if (userOption === computer) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computer} beats ${userOption}`;
  }
}