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
  if(currentPacman.checkCollison){
    return
  };
  if(currentGhost2.checkCollison){
    return
  };
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
function clearBoard(){
  document.getElementById("game-board").innerHTML = "";
}

function gameOver(){
  clearBoard();
  document.getElementById("game-over").innerHTML = "<h4 class='neon'> </h4>" +
  "<h4 class='neon'>G<span>a</span>m<span>e</span><span> O</span>ve<span>r</span></h4>" +
  "<div class='deco'><div class='line'></div><div class='line'></div><div class='line'></div><div class='line'></div></div>";
}

const Pacman = function(){
  this.x = 9;
  this.y = 6;
  this.checkCollison = false;
}

Pacman.prototype.move = function(someKeyCode){
  switch(someKeyCode){
    case 37: //Left
      if(boardData[currentGame.pacman.y][currentGame.pacman.x-1] !== 1){
        if(boardData[currentGame.pacman.y][currentGame.pacman.x-1] === 2){
          score += 10;
          updateScore();
        }
        if(boardData[currentGame.pacman.y][currentGame.pacman.x-1] === 8){
          currentGame.pacman.checkCollison = true;
          gameOver();
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
        if(boardData[currentGame.pacman.y][currentGame.pacman.x+1] === 8){
          currentGame.pacman.checkCollison = true;
          gameOver();
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
        if(boardData[currentGame.pacman.y-1][currentGame.pacman.x] === 8){
        currentGame.pacman.checkCollison = true;
        gameOver();
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
        if(boardData[currentGame.pacman.y+1][currentGame.pacman.x] === 8){
          currentGame.pacman.checkCollison = true;
          gameOver();
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
const Ghost= function(thisX, thisY){
  this.x = thisX;
  this.y = thisY;
  this.checkCollison = false;
}

Ghost.prototype.move = function(){
  if(boardData[currentGhost.y][currentGhost.x-1] !== 1){
     boardData[currentGhost.y][currentGhost.x] = 2;
     currentGhost.x -= 1;
     boardData[currentGhost.y][currentGhost.x] = 8;
  }
  else if(boardData[currentGhost.y][currentGhost.x-1] === 1){
    boardData[currentGhost.y][currentGhost.x] = 2;
    currentGhost.x += Math.floor(Math.random() * 11);
    boardData[currentGhost.y][currentGhost.x] = 8;
  }
  if(boardData[currentGhost.y][currentGhost.x-1] === 4 ||
     boardData[currentGhost.y][currentGhost.x-1] === 5 ||
     boardData[currentGhost.y][currentGhost.x-1] === 6 ||
     boardData[currentGhost.y][currentGhost.x-1] === 7){
     currentGhost.checkCollison = true;
    gameOver();
  }
  drawMap();
}
function Ghost2(thisX, thisY){
  this.x = thisX;
  this.y = thisY;
  this.checkCollison = false;
}

Ghost2.prototype.move = function(){
  if(boardData[currentGhost2.y][currentGhost2.x-1] !== 1){
     boardData[currentGhost2.y][currentGhost2.x] = 2;
     currentGhost2.x -= 1;
     boardData[currentGhost2.y][currentGhost2.x] = 8;
  }
  else if(boardData[currentGhost2.y][currentGhost2.x-1] === 1){
    boardData[currentGhost2.y][currentGhost2.x] = 2;
    currentGhost2.x += Math.floor(Math.random() * 11);
    boardData[currentGhost2.y][currentGhost2.x] = 8;
  }
  if(boardData[currentGhost2.y][currentGhost2.x-1] === 4 ||
     boardData[currentGhost2.y][currentGhost2.x-1] === 5 ||
     boardData[currentGhost2.y][currentGhost2.x-1] === 6 ||
     boardData[currentGhost2.y][currentGhost2.x-1] === 7){
     currentGhost2.checkCollison = true;
    gameOver();
  }
  drawMap();
}

const Game = function(){
  this.pacman = {};
  //this.ghost = [];
}

let currentGame;
let currentPacman;
let currentGhost;
let currentGhost2;

function startGame() {
  currentGame = new Game();
  currentPacman = new Pacman();
  currentGame.pacman = currentPacman;
  
  currentGhost = new Ghost(16,12);
  currentGame.ghost = currentGhost;
  
  currentGhost2 = new Ghost2(16,2);
  currentGame.ghost2 = currentGhost2;
  drawMap();
  
  console.log(currentGhost2);
  console.log(currentGhost);
  
  setInterval (currentGhost.move , 500);
  setInterval (currentGhost2.move , 500);
  
}

document.onkeydown = function(event){
  currentGame.pacman.move(event.keyCode)
}































};

