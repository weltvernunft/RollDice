const rollDiceBtn = document.querySelector('.roll-dice-btn');
const holdBtn = document.querySelector('.hold-btn');
const newGameBtn = document.querySelector('.new-btn');
const currentL = document.querySelector('.current-c.l');
const currentR = document.querySelector('.current-c.r');
const scoreL = document.querySelector('.count.l');
const scoreR = document.querySelector('.count.r');
const splitL = document.querySelector('.split.left');
const splitR = document.querySelector('.split.right');

document.querySelector(
  '.dice'
).style.backgroundImage = `url(./diceIm/DiceDef.png)`;

document.getElementById('hold-btn').disabled = true;
document.getElementById('roll-dice-btn').disabled = true;

let totalL = 0;
let totalR = 0;

let currentScore = 0;
let diceValue = 0;

currentL.textContent = '0';
currentR.textContent = '0';

scoreL.textContent = '0';
scoreR.textContent = '0';

let playerCur = currentL;
let playerTotal = scoreL;

let toggleVar = 1;

function switchActive() {
  toggleVar *= -1;
  if (toggleVar === 1) {
    playerCur = currentL;
    playerTotal = scoreL;
  } else {
    playerCur = currentR;
    playerTotal = scoreR;
  }
  splitL.classList.toggle('active')
  splitR.classList.toggle('active')
}

function addScore() {
  if (diceValue != 1) {
    currentScore += diceValue;
    playerCur.textContent = currentScore;
  } else {
    currentScore = 0;
    playerCur.textContent = currentScore;
    switchActive();
    scoreCount = 0;
  }
}

holdBtn.addEventListener('click', () => {
  playerCur.textContent = '0';
  if (playerCur === currentL) {
    totalL += currentScore;
    scoreL.textContent = totalL;
    switchActive();
  } else {
    totalR += currentScore;
    scoreR.textContent = totalR;
    switchActive();
  }
  currentScore = 0;
});

rollDiceBtn.addEventListener('click', () => {
  diceValue = Math.trunc(Math.random() * 6) + 1;
  document.querySelector(
    '.dice'
  ).style.backgroundImage = `url(./diceIm/Dice${diceValue}.svg)`;
  addScore();
});

newGameBtn.addEventListener('click', () => {
  document.getElementById('hold-btn').disabled = false;
  document.getElementById('roll-dice-btn').disabled = false;
  splitL.classList.add('active')
  totalL = 0;
  totalR = 0;
  currentScore = 0;
  currentL.textContent = '0';
  currentR.textContent = '0';
  scoreL.textContent = '0';
  scoreR.textContent = '0';
  document.querySelector(
    '.dice'
  ).style.backgroundImage = `url(./diceIm/DiceDef.png)`;
});
