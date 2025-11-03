allCells = document.querySelectorAll('.cell');
const timeToRemember = 500;

const gameState = {
  q: null,
  p: null,
  li: null,
  a: null,
  ul: null,
  ol: null,
  dl: null,
  em: null,
};

allCells.forEach((cell) => {
  cell.onclick = () => {
    cell.classList.add('opened');
    const opened = [...document.querySelectorAll('.opened')];
    if (opened.length === 2) {
      if (filterClasslistArray(opened[0]) === filterClasslistArray(opened[1])) {
        opened[0].classList.add('disabled');
        opened[1].classList.add('disabled');
        opened[0].classList.remove('opened');
        opened[1].classList.remove('opened');
        gameState[filterClasslistArray(opened[0])] = true;
        if (checkWin(gameState)) {
          makeWin();
        }
      } else {
        setTimeout(() => {
          opened[0].classList.remove('opened');
          opened[1].classList.remove('opened');
        }, timeToRemember);
      }
    }
  };
});

function filterClasslistArray(el) {
  return [...el.classList].filter((className) => {
    return (
      className !== 'opened' && className !== 'disabled' && className !== 'cell'
    );
  })[0];
}

function checkWin(obj) {
  return Object.values(obj).reduce((acc, item) => {
    return acc && item;
  });
}

function makeWin() {
  const gameZone = document.querySelector('.game-zone');
  let p = document.createElement('p');
  p.className = 'win';
  p.textContent = 'Вы выиграли!';
  gameZone.append(p);
  document.body.style.animation = 'change-bg 5s linear infinite alternate';

  let button = document.createElement('button');
  button.className = 'again';
  button.textContent = 'Повторить';
  gameZone.append(button);
  document.querySelector('.again').onclick = () => {
    playAgain();
  };
}

function playAgain() {
  [...Object.keys(gameState)].forEach((item) => (gameState[item] = null));
  document.querySelectorAll('.cell').forEach((item) => {
    item.classList.remove('opened');
    item.classList.remove('disabled');
  });
  document.querySelector('.win').remove();
  document.querySelector('.again').remove();
  document.body.style.animation = 'none';
}
