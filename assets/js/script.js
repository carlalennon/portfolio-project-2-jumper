
// set up Canvas 

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Set up player, variable are passed into the draw method below for scaling 
const playerSpr = document.getElementById("sprite");
const playerWidth = 50;
const playerHeight = 100;

// overrides default canvas w/h
canvas.width = 400;
canvas.height= 200;

// placeholder player
ctx.drawImage(playerSpr, 10, 80, playerWidth, playerHeight);


// Draw floor line 
ctx.beginPath();
ctx.moveTo(0, 160);
ctx.lineTo(canvas.width, 160);
ctx.stroke();
// function startGame(){
//     myGameArea.start();

//     //placeholder for player sprite
//     myGamePiece = new component(30,30,"red",10,120);

// }

// var  myGameArea = {


//     start : function() {
//         // Change canvas size to window width after testing 
//         this.canvas.width = 400;
//         this.canvas.height = 200;

//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);

//         this.interval = setInterval(updateGameArea, 20);
//         window.addEventListener("keydown", function (e) {
//             myGameArea.key = e.key;
//         })
//     },

    

//     clear : function() {
//         this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
//     }
// }

// // Experiment time 


// // Give the player object context so it knows what it is 

// function component(width, height, color, x, y) {
//     this.width = width;
//     this.height = height;
//     this.speedX = 0;
//     this.speedY = 0;
//     this.x = x;
//     this.y = y;
//     this.update = function(){
//     ctx = myGameArea.context;
//     ctx.fillStyle = color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//     this.move();

//     document.addEventListener("keydown", this.keydown);
//     document.addEventListener("keyup", this.keyup);
//     }
//     //movement 
//     this.newPos = function() {
//         this.x += this.speedX;
//         this.y += this.speedY;
//     }

//    keydown =(e)=>{
//         if (e.code === "ArrowUp"){
//             this.upPressed =true;
//         }
//    }
//    keyup =(e)=>{
//         if (e.code === "ArrowUp"){
//             this.upPressed =false;
//         }
//    }

//    move() {
//     if (this.upPressed) {
//         this.y += this.speedY;
//     }
//    }
// }

// // Update function. Sets and clears game area 50fps

// function updateGameArea() {
//     myGameArea.clear();
//     myGamePiece.speedX=0;
//     myGamePiece.speedY=0;
//     //Adding arrow control 
//     myGamePiece.newPos();
//     myGamePiece.update();
// }

// function moveLeft() {
//     myGamePiece.x += 1;
// }
// function moveup() {
//     myGamePiece.speedY -= 1;
// }

// function movedown() {
//     myGamePiece.speedY += 1;
// }


// // Add frames to game 50fps





// //Player movement control -- note the position of the player is changed using the x/y grid 

// // when player is ducking, his height needs to be half and a new sprite needs to be drawn

// // Adding event listeners 


// // Setting up the canvas to have context and be drawn on 


// // Canvas height 1080






