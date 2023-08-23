
// set up Canvas 

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// overrides default canvas w/h
canvas.width = 400;
canvas.height= 200;

//Set up player, variable are passed into the draw method below for scaling 
const playerSpr = document.getElementById("sprite");
var playerEdge = {
 playerWidth : 50,
 playerHeight : 100,
 playerX : 10,
 playerY : 80,
 playerPositionY : 30
}

//Set up obstacle 
var obstacleEdge = {
    ampWidth : 50,
    ampHeight : 50,
    ampX : 200,
    ampY : 130
}
const sprAmp = document.getElementById("obstacle-amp");


//Collision
 
let positionFloor = 179 - playerEdge.playerHeight;
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
    playerEdge.playerPositionY = playerEdge.playerPositionY + velocity*acceleration;
    } else {
        return;
    }
    
  }

// Experiem


function draw() {


    // placeholder player
    playerEdge.playerPositionY = playerEdge.playerPositionY + velocity;
        velocity = velocity + acceleration;
            ctx.drawImage(
        
            playerSpr, //img
            playerEdge.playerX, //x co-ord
            playerEdge.playerPositionY,  //y co-ord
            playerEdge.playerWidth, 
            playerEdge.playerHeight
            );

            // Player collider box
            


        // Add floor collision to player 
        if (playerEdge.playerPositionY >= positionFloor){
            velocity = 0;
            acceleration = 0;
            playerY = positionFloor;
        }
 

        //Draw obstacles 
        ctx.drawImage(
            sprAmp,
            obstacleEdge.ampX,
            obstacleEdge.ampY,
            obstacleEdge.ampWidth,
            obstacleEdge.ampHeight
    );


    // obstacle collider 


    obstacleEdge.ampX += gameSpeed;  


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
    draw();
    gameSpeed -= .005;


    
}
setInterval(intervalLoop, 20);


//Collision logic 

    let collisionObj;

    // obstacle collision 
    let objLeft = this.ampX;
    let objRight = this.ampX + (this.ampWidth);
    let objTop = this.ampY;
    let objBottom = this.ampY + (this.ampHeight);

    // Add collision box to player 
    let playerLeft = this.playerX;
    let playerRight = this.playerX + (this.playerWidth);
    let playerTop = this.playerY;
    let playerBottom = this.playerY + (this.playerHeight);



function collision() {
    // contact with ground 
     if (playerEdge.playerPositionY >= positionFloor) {
        console.log("Player is on ground");
        velocity = 0;
        acceleration = 0;
        playerEdge.playerPositionY=positionFloor;
        playerOnGround =true;
     }

     else {
        playerOnGround = false;
        console.log("Player is jump");
     }

}


// Physics

// Position equation = p(n+1) = v*t + p(n)
// where p=position(x,y), v=velocity, t=time(milliseconds, intervalLoop)

// Velocity equation = v(n+1) = a*t + v(n)