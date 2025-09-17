const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('start-btn');

let score = 0;
let timeLeft = 30;
let gameInterval;
let moveInterval;

function moveTarget() {
  const container = document.querySelector('.game-container');
  const maxX = container.clientWidth - target.offsetWidth;
  const maxY = container.clientHeight - target.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  target.style.left = `${randomX}px`;
  target.style.top = `${randomY}px`;
}

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  target.style.display = 'block';
  startBtn.disabled = true;

  moveInterval = setInterval(moveTarget, 800);

  gameInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      clearInterval(moveInterval);
      target.style.display = 'none';
      startBtn.disabled = false;
      alert(`Game Over! Your score: ${score}`);
    }
  }, 1000);
}

target.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
  moveTarget();
});

startBtn.addEventListener('click', startGame);
