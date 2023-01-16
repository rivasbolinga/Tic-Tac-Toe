'use script'

const  xSelection = 'x';
const circleSelection = 'circle';
const box = document.querySelectorAll('.field');
let circleTurn;
let currentTurn;
const boxClick  = function(e) {
 const clicked = e.target;
if(circleTurn) {
  currentTurn = circleSelection;
} else {
  currentTurn = xSelection;
}
chosePlace(clicked,currentTurn);
}

box.forEach((el)=>el.addEventListener('click',boxClick, {once: true}));

const chosePlace = function(clicked,currentTurn){
box.classList.add(currentTurn);
}