window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

// const WALL = 1;
// const COIN = 2;
// const PACMAN = 3;
// const GROUND = 4;

// let pacman = {
//   x:11,
//   y:8,
//   direction: 'right'
// };
// let map;

let boardData = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1],
  [1,1,2,1,2,1,2,1,2,1,2,1,1,1,2,2,2,1],
  [1,1,2,1,1,1,1,1,1,1,2,1,2,1,1,1,2,1],
  [1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1],
  [1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,2,1,1,1,2,1,2,1,2,2,1,1,1,1,1,1],
  [1,2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,2,1,1,2,1,1,1,1,1,1,3,1,1,1,1,1,1],
  [1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
]

function drawMap(){
  for(var y = 0; y < boardData.length; y++){
    for(var x =0; x < boardData[y].length; x++){
      if(boardData[y][x] === 1){
      document.getElementById("game-board").innerHTML += "<div class=' tile wall'></div>";
      }
      else if(boardData[y][x] === 2){
        document.getElementById("game-board").innerHTML += "<div class=' tile coin'></div>";
      }
    }
  }
}


function startGame() {
  drawMap();
}



























};
