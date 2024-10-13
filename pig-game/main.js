'use strict';

const player1 = document.querySelector('.player--1');
const player2 = document.querySelector('.player--2');
const current1 = document.querySelector('#current--1');
const current2 = document.querySelector('#current--2');
const score1 = document.querySelector('#score--1');
const score2 = document.querySelector('#score--2');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');

let scores, currentScore, currentPlayer, playing;

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  currentPlayer = 1;
  playing = true;

  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;

  diceEl.classList.add('hidden');
  document.querySelector(`.player--${currentPlayer}`).classList.remove('player--winner');
  document.querySelector(`.player--2`).classList.remove('player--active');
  document.querySelector(`.player--${currentPlayer}`).classList.add('player--active');
};

init();

const swithPlayer = () => {
  document.querySelector(`#current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer == 1 ? 2 : 1;
  currentScore = 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

// Rolling the dice
buttonRoll.addEventListener('click', () => {
  if (playing) {
    let dice = Math.floor(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `./images/dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${currentPlayer}`).textContent = currentScore;
    } else {
      swithPlayer();
    }
  }
});

buttonHold.addEventListener('click', () => {
  if (playing) {
    scores[currentPlayer - 1] += currentScore;
    document.querySelector(`#score--${currentPlayer}`).textContent = scores[currentPlayer - 1];

    if (scores[currentPlayer - 1] >= 20) {
      diceEl.classList.add('hidden');
      playing = false;
      document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active');
    } else {
      swithPlayer();
    }
  }
});

buttonNew.addEventListener('click', init);
