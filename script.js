const clickSound = new Audio("./audio/click.mp3");
const winSound = new Audio("./audio/win.mp3");
const loseSound = new Audio("./audio/lose.mp3");
const drawSound = new Audio("./audio/draw.mp3");
const gameWinSound = new Audio("./audio/game win.mp3");
const gameLoseSound = new Audio("./audio/game lose.mp3");

let humanScore = 0,
  computerScore = 0,
  totalRounds = 0,
  currentRound = 1;

const myScore = document.querySelector(".myScore");
const botScore = document.querySelector(".botScore");
const msg = document.querySelector(".msg");
const buttons = document.querySelectorAll(".buttons img");
const startBtn = document.getElementById("startBtn");
const roundInput = document.getElementById("roundInput");

function getComputerChoice() {
  const n = Math.floor(Math.random() * 3);
  return n === 0 ? "rock" : n === 1 ? "paper" : "scissors";
}

function updateScore() {
  myScore.textContent = `Your Score: ${humanScore}`;
  botScore.textContent = `Computer Score: ${computerScore}`;
}

function endGame() {
  buttons.forEach(btn => btn.style.pointerEvents = "none");
  if (humanScore > computerScore) {
    msg.textContent = "🎉 You won the game!";
    gameWinSound.play();
  } else if (computerScore > humanScore) {
    msg.textContent = "😞 You lost the game.";
    gameLoseSound.play();
  } else {
    msg.textContent = "🤝 It's a draw!";
    drawSound.play(); // Optional: reuse draw sound for tie
  }

  startBtn.textContent = "Play Again";
  startBtn.style.display = "inline";
}

function playRound(human) {
  if (currentRound > totalRounds) return;
  const computer = getComputerChoice();
  if (human === computer) {
    drawSound.play();
    msg.textContent = `Round ${currentRound}: It's a draw!`;
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    humanScore++;
    winSound.play();
    msg.textContent = `Round ${currentRound}: You win! ${human} beats ${computer}`;
  } else {
    computerScore++;
    loseSound.play();
    msg.textContent = `Round ${currentRound}: You lose! ${computer} beats ${human}`;
  }
  updateScore();
  if (currentRound === totalRounds) {
    endGame();
  }
  currentRound++;
}

buttons.forEach((img) => {
  img.addEventListener("click", () => {
    if (currentRound > totalRounds) return;
    clickSound.currentTime = 0;
    clickSound.play();
    playRound(img.alt);
  });
});

startBtn.addEventListener("click", () => {
  totalRounds = parseInt(roundInput.value);
  if (!totalRounds || totalRounds <= 0) return alert("Enter valid rounds");

  // Reset
  humanScore = 0;
  computerScore = 0;
  currentRound = 1;
  updateScore();
  msg.textContent = "Game started!";
  startBtn.style.display = "none";
  buttons.forEach(btn => btn.style.pointerEvents = "auto");
});
