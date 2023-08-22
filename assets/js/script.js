
// set up Canvas 

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// overrides default canvas w/h
canvas.width = 400;
canvas.height= 200;

//Set up player, variable are passed into the draw method below for scaling 
const playerSpr = document.getElementById("sprite");
const playerWidth = 50;
const playerHeight = 100;
let playerX = 10;
let playerY = 80;


//Collision
let playerPositionY = 30; 
let positionFloor = 179 - playerHeight;
let playerOnGround;

// Physics 
let velocity = 0;
var acceleration = .5; 
let gravity = 9.8;



document.addEventListener("keydown", playerJump);

// button controls
function playerJump(e) {
    switch(e.code) {
        case "ArrowUp":
            playerJump();
        break;

        case "ArrowDown":
            playerPositionY += 10;
        break;
    }

}

// jump animation 
  function playerJump() {
    velocity = -10;
    acceleration = .5;
    playerPositionY = playerPositionY + velocity*acceleration;
    
  }

function drawPlayer() {
// placeholder playeret 

        playerPositionY = playerPositionY + velocity;
        velocity = velocity + acceleration;

      
            ctx.drawImage(
        
            playerSpr, //img
            playerX, //x co-ord
            playerPositionY,  //y co-ord
            playerWidth, 
            playerHeight
            );

        // Add floor collision to player 
        if (playerPositionY >= positionFloor){
            velocity = 0;
            acceleration = 0;
            playerY = positionFloor;
        }

}


function drawFloor() {
// Draw floor line 
ctx.beginPath();
ctx.moveTo(0, 180);
ctx.lineTo(canvas.width, 180);
ctx.stroke();
}





// "loop", interval, frames 
function intervalLoop() {
    //Interact

    //Logic
    collision();
    //Physics Engine
    
    
    //Render
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawPlayer();
    drawFloor();
}
setInterval(intervalLoop, 20);


//Collision logic 

function collision() {
    // contact with ground 
     if (playerPositionY >= positionFloor) {
        console.log("Player is on ground");
        velocity = 0;
        acceleration = 0;
        playerPositionY=positionFloor;
     }

     else {
        console.log("Player is jump");
     }
    //contact with obstacle 

}

// Physics

// Position equation = p(n+1) = v*t + p(n)
// where p=position(x,y), v=velocity, t=time(milliseconds, intervalLoop)

// Velocity equation = v(n+1) = a*t + v(n)