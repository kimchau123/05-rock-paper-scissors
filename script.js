// Get the buttons from the HTML by their IDs
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const result = document.getElementById("result");

// Show the player's choice and a random computer choice on the page
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  let outcome = "";

  // Compare the choices to find the winner
  if (playerChoice === computerChoice) {
    outcome = "It's a tie!";
  } else if (
    (playerChoice === "Rock 🪨" && computerChoice === "Scissors ✂️") ||
    (playerChoice === "Paper 📄" && computerChoice === "Rock 🪨") ||
    (playerChoice === "Scissors ✂️" && computerChoice === "Paper 📄")
  ) {
    outcome = "You win!";
  } else {
    outcome = "Computer wins!";
  }

  result.textContent = `You chose: ${playerChoice} | Computer chose: ${computerChoice} | ${outcome}`;
}

// Play a round when the player clicks a button
rockButton.addEventListener("click", function() {
  playRound("Rock 🪨");
});

// Play a round when the player clicks a button
paperButton.addEventListener("click", function() {
  playRound("Paper 📄");
});

// Play a round when the player clicks a button
scissorsButton.addEventListener("click", function() {
  playRound("Scissors ✂️");
});

// Randomly choose Rock, Paper, or Scissors for the computer
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const choice = ["Rock 🪨", "Paper 📄", "Scissors ✂️"];
  return choice[randomNumber];
}