

const restarBtn = document.querySelector('.restart-btn');
const  xSelection = 'x';
const circleSelection = 'circle';
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
const box = document.querySelectorAll('.field');
const field = document.querySelectorAll('[box]');
const displayTurn = document.querySelector('.game-display');
let circleTurn;

// const aiMove = function() {
//   // select a random empty cell
//   let emptyCells = [...box].filter(cell => !cell.classList.contains(xSelection) && !cell.classList.contains(circleSelection));
//   let randomIndex = Math.floor(Math.random() * emptyCells.length);
//   let aiChoice = emptyCells[randomIndex];
  
//   // place the AI's mark on the selected cell
//   chosePlace(aiChoice, xSelection);
//   checkWin(currentTurn)
  
// }

const switchTurn = function() {
  circleTurn = !circleTurn
}
 // -- function toStart and reset the game
const boxClick  = function(e) {
  const clicked = e.target;
 let currentTurn;
    if(circleTurn) {
      currentTurn = circleSelection;
      displayTurn.textContent = "It's X's turn";
      displayTurn.style.color = "#f39805";
      
    } else {
      currentTurn = xSelection;
      displayTurn.textContent = "It`s circles's turn";
      displayTurn.style.color = "#f3bf05";
    }   
    chosePlace(clicked, currentTurn);
    if (checkWin(currentTurn)) {
      endGame(false)
    } else if (isDraw()) {
      endGame(true)
    } else {
     switchTurn();
    
    }
    }
  
 
  // -- function toStart and reset the game
const startGame = function() {
  circleTurn = false;
  box.forEach((field)=> {
    field.classList.remove(xSelection);
  field.classList.remove(circleSelection);
})
  box.forEach((el)=>el.addEventListener('click',boxClick, {once: true}));
}

startGame();

// -- function to check if there is a Draw
const isDraw = function() {
  return [...box].every(cell=> {
    return cell.classList.contains(xSelection) || cell.classList.contains(circleSelection);
  })
}
// -- Pop Up modal when there is a draw or win --
const endGame = function(draw) {
  if(draw) {
    console.log('Draw')
  } else {
    console.log(`${circleTurn ? "O's" : "X`s"} Wins!`)
  }
}
// -- Function to add x or C in the field --
const chosePlace = function(clicked,currentTurn){
clicked.classList.add(currentTurn);
}

//- Check if there is a win --
const checkWin = function(currentTurn) {
  return win.some(com => {
    return com.every(i => {
      return box[i].classList.contains(currentTurn);
    });
  })
};
// -- Event to restart the game --
restarBtn.addEventListener('click', startGame);