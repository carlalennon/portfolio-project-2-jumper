
// set up Canvas 

var player;

function startGame(){
    myGameArea.start();

    //placeholder for player sprite
    player = new component(30,30,"red",10,120);

}

// Give the player object context so it knows what it is 

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;
    ctx.fillStyle - color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}

// Add frames to game 50fps


var  myGameArea = {
    canvas : document.createElement("canvas"),

    start : function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.context = this.canvas.getContext("2d");
        this.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    }
}

// Setting up the canvas to have context and be drawn on 


// Canvas height 1080






