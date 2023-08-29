
// set up Canvas 

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set HTML image elements and assign to variables
const playerSpr = new Image();
playerSpr.src = "./assets/images/spr-player-anim-temp-sheet-export-hi-res.png";

const sprAmp = new Image();
sprAmp.src = "./assets/images/spr-obstacle-amp-temp.png";

const sprMic = new Image();
sprMic.src = "./assets/images/spr-obstacle-mic.png";

const gameOverSprite = new Image();
gameOverSprite.src = "./assets/images/game-over=screen-temp.png";

// overrides default canvas w/h
canvas.width = 800;
canvas.height= 400;

//Set up player, variable are passed into the draw method below for scaling 
var playerEdge = {
 playerWidth : 60,
 playerHeight : 120,
 playerX : 20,
 playerY : 160,
 playerPositionY : 60
}

// Animation handling from Frank's Lab -- See ReadMe
const frameWidth = 80; // Sprite sheet slicing
const frameHeight = 160;

let frameNo = 0; // X of sheet
let frameType = 0; // y of sheet

let gameFrame = 0;
const staggerFrames = 3;

const spriteAnimations = [];
let playerState = "run";

animations = [
    {name: "run",
     frames:7},

    {name: "jump",
    frames:2}
];
animations.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j=0; j <state.frames; j++){
        let positionX = j*frameWidth;
        let positionY = index*frameHeight;
        frames.loc.push({x:positionX, y:positionY});
    }

    spriteAnimations[state.name] = frames;
});


//Set up obstacle 
var obstacleEdge = {
    ampWidth : 60,
    ampHeight : 60,
    ampX : 1000,
    ampY : 300
}

var obstacleEdgeMic = {
    micWidth : 60,
    micHeight : 120,
    micX : 1200,
    micY : 240
}

//Collision 
let positionFloor = 240;
let playerOnGround;
let collisionAmp;
let collisionMic;

// Physics 
let velocity = 0;
var acceleration = .5; 
let gameSpeed = -5;

// Player controls 
let upPressed = false;  // Stores if up key has been pressed 
let downPressed = false; // Store if down key has been pressed 

//Game over handling 
let gameOverState = false;
let score = 0; 
let highScore= [0];

document.addEventListener("keydown", function(e)  
{
    if (e.key == "ArrowUp"){
        console.log("Up arrow");
        upPressed = true;
        playerJump();
    } else if (e.key == "ArrowDown") {
        console.log("Down Arrow");
        downPressed = true; 
    }

    if (e.key == "Enter" && gameOverState == true){
        console.log("Enter key");
        resetGame();
    }
});

document.addEventListener("keyup", function(e)  
{
    if (e.key == "ArrowUp"){
        console.log("Up arrow up");
        upPressed = false;
    } else if (e.key == "ArrowDown") {
        console.log("Down Arrow up");
        downPressed = false;
    }
});

// jump animation 
  function playerJump() {

    if (playerOnGround === true) {
    velocity = -13;
    acceleration = .5;
    playerEdge.playerPositionY = playerEdge.playerPositionY + velocity*acceleration;
    } else {
        return;
    } 
  }


// Interval for obstacles 
    function randomDistance(min, max) {
        return Math.random()*(max-min) + min;
    }
    

function draw() {
    // placeholder player
    playerEdge.playerPositionY = playerEdge.playerPositionY + velocity;
        velocity = velocity + acceleration;

        let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length; //All values turned into 0 under math.floor, 1 means reset
        let frameX = frameWidth * position;
        let frameY = spriteAnimations[playerState].loc[position].y;

            ctx.drawImage(
            playerSpr, //img
            frameNo, //x co-ord on sheet
            frameType,  //y co-ord on sheet (framepicker)
            frameWidth,
            frameHeight,
            playerEdge.playerX,
            playerEdge.playerPositionY,
            playerEdge.playerWidth, 
            playerEdge.playerHeight
            );

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
        ctx.drawImage(
            sprMic,
            obstacleEdgeMic.micX,
            obstacleEdgeMic.micY,
            obstacleEdgeMic.micWidth,
            obstacleEdgeMic.micHeight
    );
   
    

   
    // Animate obstacles            
    obstacleEdge.ampX += gameSpeed; 
    obstacleEdgeMic.micX += gameSpeed; 


    // Push new obstacles 
    if (obstacleEdge.ampX < -50){
        obstacleEdge.ampX = randomDistance(800,1400);
    }

    if (obstacleEdgeMic.micX< -50){
        obstacleEdgeMic.micX = randomDistance(800, 4000);
    }

    // obstacle collider 
            if (collisionAmp === true) {
                console.log("Collide Amp");
            }

            if (collisionMic === true) {
                console.log("Collide Mic");
            }

    // Draw floor line 
        ctx.beginPath();
        ctx.moveTo(0, 180);
        ctx.lineTo(canvas.width, 180);
        ctx.stroke();

    // Game over screen 
     
    if (gameOverState == true){
        ctx.drawImage(
            gameOverSprite,
            0,
            0,
            canvas.width,
            canvas.height
        );
    }

    // Score 
   

    if (gameOverState == false){
        ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(`Score: ${score}`, 10, 50);
    score++;
    } else if (gameOverState == true){
        ctx.font = "20px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(`Final score: ${score}`, canvas.width/2, 50);
    }
    
}

// "loop", interval, frames 
function intervalLoop() {
    collision();
    //Render
    ctx.clearRect(0,0,canvas.width, canvas.height);
    draw();
    gameOver();
    //Game gets faster over time 
    gameSpeed -= .0005;   
    
}
setInterval(intervalLoop, 20);

 //Animate player
   
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
        velocity = 0;
        acceleration = 0;
        playerEdge.playerPositionY=positionFloor;
        playerOnGround =true;
     }

     else {
        playerOnGround = false;
     }

     // contact with obstacle 
        // Amp (for player)
     if (playerEdge.playerX > obstacleEdge.ampX + obstacleEdge.ampWidth ||
         playerEdge.playerX + playerEdge.playerWidth < obstacleEdge.ampX ||
         playerEdge.playerPositionY > obstacleEdge.ampY + obstacleEdge.ampHeight ||
         playerEdge.playerPositionY + playerEdge.playerHeight < obstacleEdge.ampY) {
            collisionAmp = false;
         } else {
            collisionAmp = true;
         }
        
         // Mic (for player)

     if (playerEdge.playerX > obstacleEdgeMic.micX + obstacleEdgeMic.micWidth ||
         playerEdge.playerX + playerEdge.playerWidth < obstacleEdgeMic.micX ||
         playerEdge.playerPositionY > obstacleEdgeMic.micY + obstacleEdgeMic.micHeight ||
         playerEdge.playerPositionY + playerEdge.playerHeight < obstacleEdgeMic.micY) {
               collisionMic = false;
            } else {
               collisionMic = true;
            }    
         // Amp (for mic - draw a larger box around the amp and prevent a mic from spawning within this box, so that obstacles aren't too close together)
}

function gameOver() {
    if (collisionAmp == true) {
        gameSpeed = 0;
        gameOverState = true;
    }
    if (collisionMic == true && downPressed !== true){
        gameSpeed = 0;
        gameOverState = true;
    }
}

function resetGame() {

    gameOverState = false; 
    //reset player
    playerEdge.playerWidth = 60;
    playerEdge.playerHeight = 120;
    playerEdge.playerX = 20;
    playerEdge.playerY = 160;
    playerEdge.playerPositionY = 60;

    //reset obstacles
    obstacleEdge.ampX = randomDistance(800,1400);
    obstacleEdgeMic.micX = randomDistance(800, 4000);

    // reset game speed 
    gameSpeed = -5;
    velocity = 0;
    acceleration = .5; 

    score=0;
}

// Rule button 

let ruleButton = document.getElementById("rule-button");

function showRules(element, transparency) {
    ruleButton.style.transparency = 0;
}



// Physics

// Position equation = p(n+1) = v*t + p(n)
// where p=position(x,y), v=velocity, t=time(milliseconds, intervalLoop)

// Velocity equation = v(n+1) = a*t + v(n)

// Obstacle collider 
// if the player edge is within the obstacle it's a collide 
// use arithmic operators  