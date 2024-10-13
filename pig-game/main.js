'use strict';

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let score1 = document.querySelector('.current--1');
let score2 = document.querySelector('.current--2');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');

let scores = [0, 0];
let currentPlayer = 1;

// Rolling the dice
buttonRoll.addEventListener('click', () => {
  let random = Math.floor(Math.random() * 6) + 1;

  dice.src = `./images/dice-${random}.png`;
});
