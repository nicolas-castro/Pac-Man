window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  
  

  // 1 =  <div class="tile wall"></div>
  function drawWall(){
    document.getElementById("game-board").innerHTML += "<div class=' tile wall'></div>";
  }
  // 2 =  <div class="tile coin"></div>
  function drawCoin(){
    document.getElementById("game-board").innerHTML += "<div class=' tile coin blink'></div>";
  }
  // 3 =  <div class="tile ground"></div>
  function drawGround(){
    document.getElementById("game-board").innerHTML += "<div class=' tile ground'></div>";
  }
  // 4 =  <div class="tile pacman"></div>
  function drawPacman(){
    document.getElementById("game-board").innerHTML += "<div class=' tile pacman'></div>";
  }
  // 5 =  <div class="tile left"></div>
  function drawPacmanLeft(){
    document.getElementById("game-board").innerHTML += "<div class=' tile left'></div>";
  }
   // 6 =  <div class="tile up"></div>
   function drawPacmanUp(){
    document.getElementById("game-board").innerHTML += "<div class=' tile up'></div>";
  }
   // 7 =  <div class="tile down"></div>
   function drawPacmanDown(){
    document.getElementById("game-board").innerHTML += "<div class=' tile down'></div>";
  }
  //8 = <div class="tile ghost"></div>
  function drawGhost(){
    document.getElementById("game-board").innerHTML += "<div class=' tile ghost'></div>";
  }


let boardData = [
  [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
  [1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,1,3],
  [1,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,8,1,3],
  [1,2,1,2,1,2,1,2,1,1,1,1,1,1,1,1,2,1,3],
  [1,2,1,2,2,2,1,2,2,2,1,2,2,1,2,2,2,1,3],
  [1,2,2,2,1,2,1,1,2,1,1,1,2,1,1,2,1,1,3],
  [1,1,1,2,1,2,1,1,2,4,2,2,2,2,1,2,1,1,3],
  [3,2,2,2,1,2,1,1,2,1,1,2,1,1,1,2,2,3,3],
  [1,1,1,2,2,2,2,1,1,1,1,2,2,2,2,2,1,1,3],
  [1,1,1,2,1,1,2,2,2,1,1,1,1,1,1,2,1,1,3],
  [1,2,2,2,1,1,1,1,2,2,2,2,2,1,2,2,2,1,3],
  [1,2,1,2,2,2,2,1,2,1,1,1,2,1,2,1,2,1,3],
  [1,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,8,1,3],
  [1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,1,3],
  [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
]

function drawMap(){
  document.getElementById("game-board").innerHTML = "";
  for(var y = 0; y < boardData.length; y++){
    for(var x =0; x < boardData[y].length; x++){
      if(boardData[y][x] === 1){
        drawWall();
      }
      else if(boardData[y][x] === 2){
        drawCoin();
      }
      else if(boardData[y][x] === 3){
        drawGround();
      } 
      else if(boardData[y][x] === 4){
        drawPacman();
      } 
      else if(boardData[y][x] === 5){
        drawPacmanLeft();
      }
      else if(boardData[y][x] === 6){
        drawPacmanUp();
      }
      else if(boardData[y][x] === 7){
        drawPacmanDown();
      }
      else if(boardData[y][x] === 8){
        drawGhost();
      }
    }
    document.getElementById("game-board").innerHTML += "<br>";
  }
}

let score = 0;
function updateScore(){
  document.getElementById("score").innerHTML = "Score: " + score;;
}

const Pacman = function(){
  this.x = 9;
  this.y = 6;
}

Pacman.prototype.move = function(someKeyCode){
  switch(someKeyCode){
    case 37: //Left
      if(boardData[currentGame.pacman.y][currentGame.pacman.x-1] !== 1){
        if(boardData[currentGame.pacman.y][currentGame.pacman.x-1] === 2){
          score += 10;
          updateScore();
        }
        if(currentPacman.x < 0){
          currentPacman.x = 18;
        }
        boardData[currentGame.pacman.y][currentGame.pacman.x] = 3;
        currentPacman.x -= 1;
        boardData[currentGame.pacman.y][currentGame.pacman.x] = 5;
        drawMap();
      }
    break;
    case 39: //Right
      if(boardData[currentGame.pacman.y][currentGame.pacman.x+1] !== 1){
        if(boardData[currentGame.pacman.y][currentGame.pacman.x+1] === 2){
          score += 10;
          updateScore();
        }
        if(currentPacman.x > 16){
          boardData[currentGame.pacman.y][currentGame.pacman.x] = 3;
          currentPacman.x = -1;
        }
        boardData[currentGame.pacman.y][currentGame.pacman.x] = 3;
        currentPacman.x += 1;
        boardData[currentGame.pacman.y][currentGame.pacman.x] = 4;
        drawMap();
      }
    break;
    case 38: //Up
      if(boardData[currentGame.pacman.y-1][currentGame.pacman.x] !== 1){
        if(boardData[currentGame.pacman.y-1][currentGame.pacman.x] === 2){
          score += 10;
          updateScore();
        }
        boardData[currentGame.pacman.y][currentGame.pacman.x] = 3;
        currentPacman.y -= 1;
        boardData[currentGame.pacman.y][currentGame.pacman.x] = 6;
        if(currentPacman.y < 1){
          boardData[currentGame.pacman.y][currentGame.pacman.x] = 3;
          currentPacman.y = 14;
          }
        drawMap(); 
      }
    break;
    case 40: //Down
      if(boardData[currentGame.pacman.y+1][currentGame.pacman.x] !== 1){
        if(boardData[currentGame.pacman.y+1][currentGame.pacman.x] === 2){
          score += 10;
          updateScore();
        }
        boardData[currentGame.pacman.y][currentGame.pacman.x] = 3;
        currentPacman.y += 1;
        boardData[currentGame.pacman.y][currentGame.pacman.x] = 7;
        if(currentPacman.y > 13){
           boardData[currentGame.pacman.y][currentGame.pacman.x] = 3;
           currentPacman.y = 0;
          }
        drawMap();
      }
    break;
  }
}

function Ghost(thisX, thisY){
  this.x = thisX;
  this.y = thisY;
}

Ghost.prototype.move = function(){
  if(boardData[currentGame.ghost.y][currentGame.ghost.x-1] === 2){
     boardData[currentGame.ghost.y][currentGame.ghost.x] = 2;
     currentGhost.x -= 1;
     boardData[currentGame.ghost.y][currentGame.ghost.x] = 8;
  }
  else if(boardData[currentGame.ghost.y][currentGame.ghost.x-1] === 1){
    boardData[currentGame.ghost.y][currentGame.ghost.x] = 2;
    currentGhost.x += 1;
    boardData[currentGame.ghost.y][currentGame.ghost.x] = 8;
  }
  drawMap();
}

const Game = function(){
  this.pacman = {};
  this.ghost = [];
}

let currentGame;
let currentPacman;
let currentGhost;

function startGame() {
  currentGame = new Game();
  currentPacman = new Pacman();
  currentGame.pacman = currentPacman;
  currentGhost = new Ghost(16,12);
  
  
  currentGame.ghost = currentGhost;
  
  drawMap();

  setInterval (currentGame.ghost.move , 500);
  
  console.log("Pacman Y position: ", currentPacman.y);
  console.log("Ghost position", currentGhost.x , currentGhost.y );
  

}

document.onkeydown = function(event){
  currentGame.pacman.move(event.keyCode)
}































};
function newFunction(currentPacman) {
  if (currentPacman.x < 0) {
    currentPacman.x = 17;
  }
}

