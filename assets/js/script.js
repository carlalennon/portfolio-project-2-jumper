
// set up Canvas 

var myGamePiece;

function startGame(){
    myGameArea.start();

    //placeholder for player sprite
    myGamePiece = new component(30,30,"red",10,120);

}

// Give the player object context so it knows what it is 

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function(){
    ctx = myGameArea.context;
    ctx.fillStyle - color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    //movement 
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

// Add frames to game 50fps


var  myGameArea = {
    canvas : document.createElement("canvas"),

    start : function() {
        // Change canvas size to window width after testing 
        this.canvas.width = 400;
        this.canvas.height = 400;

        this.context = this.canvas.getContext("2d");
        this.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    }
}

// Update function. Sets and clears game area 50fps

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}

//Player movement control -- note the position of the player is changed using the x/y grid 

function moveup() {
    myGamePiece.speedY -= 1;
}

function movedown() {
    myGamePiece.speedY += 1;
}

function moveleft() {
    myGamePiece.speedX -= 1;
}

function moveright() {
    myGamePiece.speedX += 1;
}

// Setting up the canvas to have context and be drawn on 


// Canvas height 1080






