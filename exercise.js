// Restart Game Button
var restart = document.querySelector('#b')
// Grabs all the squares
var boxes = document.querySelectorAll('td')
// Clear all the squares

function clearBoard (){
  for (var i = 0 ; i < boxes.length; i++) {
    boxes[i].textContent = '';
  }
}
restart.addEventListener('click', clearBoard)
// Check the square marker
function changeMarker() {
  if (this.textContent === '') {
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
    this.textContent = "O";
  }else {
      this.textContent = "";
  }
}
// For Loop to add event listeners to all squares
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', changeMarker)
}
