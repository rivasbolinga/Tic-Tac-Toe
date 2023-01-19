const restarBtn = document.querySelector('.restart-btn');
const xSelection = 'x';
const circleSelection = 'circle';
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const box = document.querySelectorAll('.field');
const displayTurn = document.querySelector('.game-display');
const modal = document.querySelector('.modal');
const resultMsg = document.querySelector('.modal-text');
const overlay = document.querySelector('.overlay');
let circleTurn;
// -- Function change turns --
const switchTurn = function () {
  circleTurn = !circleTurn;
};
// -- Function to add x or C in the field --
const chosePlace = function (clicked, currentTurn) {
  clicked.classList.add(currentTurn);
};
// - Check if there is a win --
const checkWin = function (currentTurn) {
  return win.some((com) => com.every((i) => box[i].classList.contains(currentTurn)));
};
// -- Pop Up modal when there is a draw or win --
const endGame = function (draw) {
  if (draw) {
    modal.classList.add('active');
    resultMsg.textContent = 'Draw! Try again';
    overlay.classList.add('active');
  } else {
    modal.classList.add('active');
    resultMsg.textContent = `${circleTurn ? "O's" : 'X`s'} Wins!`;
    overlay.classList.add('active');
  }
};
// -- function to check if there is a Draw
const isDraw = function () {
  return [...box].every((cell) => cell.classList.contains(xSelection)
  || cell.classList.contains(circleSelection));
};
// -- function toStart and reset the game
const boxClick = function (e) {
  const clicked = e.target;
  let currentTurn;
  if (circleTurn) {
    currentTurn = circleSelection;
    displayTurn.textContent = "It's X's turn";
    displayTurn.style.color = '#f39805';
  } else {
    currentTurn = xSelection;
    displayTurn.textContent = "It`s circles's turn";
    displayTurn.style.color = '#f3bf05';
  }
  chosePlace(clicked, currentTurn);
  if (checkWin(currentTurn)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    switchTurn();
  }
};
// -- function toStart and reset the game
const startGame = function () {
  modal.classList.remove('active');
  overlay.classList.remove('active');
  circleTurn = false;
  box.forEach((field) => {
    field.classList.remove(xSelection);
    field.classList.remove(circleSelection);
  });
  box.forEach((el) => el.addEventListener('click', boxClick, { once: true }));
};

startGame();
// -- Event to restart the game --
restarBtn.addEventListener('click', startGame);