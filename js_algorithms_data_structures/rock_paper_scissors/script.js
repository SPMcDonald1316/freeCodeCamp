function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const index = Math.floor(Math.random() * 3)
  return options[index];
}