'use strict';

const player1 = document.querySelector('.player--1');
const player2 = document.querySelector('.player--2');
const current1 = document.querySelector('#current--1');
const current2 = document.querySelector('#current--2');
const score1 = document.querySelector('#score1--1');
const score2 = document.querySelector('#score1--2');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');

let scores = [0, 0];
let currentScore = 0;
let currentPlayer = 1;
diceEl.classList.add('hidden');

// Rolling the dice
buttonRoll.addEventListener('click', () => {
  let dice = Math.floor(Math.random() * 6) + 1;

  diceEl.classList.remove('hidden');
  diceEl.src = `./images/dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    scores[currentPlayer - 1] += dice;
    document.querySelector(`#current--${currentPlayer}`).textContent = currentScore;
  } else {
    document.querySelector(`#current--${currentPlayer}`).textContent = 0;
    currentPlayer = currentPlayer == 1 ? 2 : 1;
    currentScore = 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
  }

  console.log(scores);
});
