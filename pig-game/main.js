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

    if (scores[currentPlayer - 1] >= 100) {
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

console.log(`
  Ваша оценка - 40 баллов
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:
1) Результаты последних 10 игр сохраняются в local storage. Есть таблица рекордов, в которой сохраняются результаты предыдущих 10 игр
2) Анимации или звуки, или настройки игры. Баллы начисляются за любой из перечисленных пунктов
3) Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения

Выполненные пункты:
1) реализован интерфейс игры
2) в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс
3) Логика игры. Ходы, перемещения фигур, другие действия игрока подчиняются определённым свойственным игре правилам
4) Реализовано завершение игры при достижении игровой цели
5) По окончанию игры выводится её результат, например, количество ходов, время игры, набранные баллы, выигрыш или поражение и т.д`);
