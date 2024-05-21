const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn"); 

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

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${playerScore === 3 ? "Player" : "Computer"} has won the game!`;

    optionsContainer.style.display = "none";
    resetGameBtn.style.display = "block";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;

  roundResultsMsg.innerText = "";
  winnerMsgElement.innerText = "";

  optionsContainer.style.display = "block";
  resetGame.style.display = "none";
}

rockBtn.addEventListener("click", () => { showResults("Rock") });
paperBtn.addEventListener("click", () => { showResults("Paper") });
scissorsBtn.addEventListener("click", () => { showResults("Scissors") });
resetGameBtn.addEventListener("click", () => { resetGame() });