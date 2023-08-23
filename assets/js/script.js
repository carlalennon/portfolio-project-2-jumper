
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

//Set up obstacle 
const sprAmp = document.getElementById("obstacle-amp");
const ampWidth = 50;
const ampHeight = 50;
let ampX = 200;
let ampY = 130;

//Collision
let playerPositionY = 30; 
let positionFloor = 179 - playerHeight;
let playerOnGround;

// Physics 
let velocity = 0;
var acceleration = .5; 
let gravity = 9.8;
let gameSpeed = -1;

// Player controls 
document.addEventListener("keydown", keyPress, false);
document.addEventListener("keyup", keyPressUp, false);

let upPressed = false;
let downPressed = false;


document.addEventListener("keydown", playerJump);

// // button controls
// function playerJump(e) {
//     switch(e.code) {

//         case "Space":
//             console.log("Spacebar");
//         break;

//         case "ArrowUp":
//             playerJump();
//         break;

//         case "ArrowDown":
//             playerPositionY += 10;
//         break;

        
//     }

// }

//button controls 2 

function keyPress(e) {
    if (e.code === "ArrowUp") {
        upPressed = true;
    } else if (e.code === "ArrowDown") {
        downPressed = true;
    }
}

function keyPressUp(e) {
    if (e.code === "ArrowUp") {
        upPressed = false;
        console.log("key up");
    } else if (e.code === "ArrowDown") {
        downPressed = false;
    }
}

function playerControls() {
    if (upPressed === true) {
        playerJump();
    }
}

// jump animation 
  function playerJump() {

    if (playerOnGround === true) {
    velocity = -10;
    acceleration = .5;
    playerPositionY = playerPositionY + velocity*acceleration;
    } else {
        return;
    }
    
  }

function drawPlayer() {
// placeholder player

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

function Obstacle() {
    ctx.drawImage(
            sprAmp,
            ampX,
            ampY,
            ampWidth,
            ampHeight
    );

    ampX += gameSpeed;
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

    collision();

    //Render
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawPlayer();
    drawFloor();
    Obstacle();
    gameSpeed -= .005;
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
        playerOnGround =true;
     }

     else {
        playerOnGround = false;
        console.log("Player is jump");
     }
    //contact with obstacle 

}

// Physics

// Position equation = p(n+1) = v*t + p(n)
// where p=position(x,y), v=velocity, t=time(milliseconds, intervalLoop)

// Velocity equation = v(n+1) = a*t + v(n)