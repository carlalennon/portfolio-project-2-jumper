

// Setting up the canvas to have context and be drawn on 
let canvas;
let context;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
let playerSprite = document.getElementById("sprite");



window.onload = function() {
    //Page is now loaded 
    let playerSprite = document.getElementById("sprite");
    context.drawImage(playerSprite, 10,10);
}

function contextForCanvas(){
        canvas = document.getElementById("canvas");
        context = canvas.getContext("2d");
        
        draw();
}

/*function draw(){
    let placeholderBackground = '#0095b0';
    context.fillStyle = placeholderBackground;
    context.fillRect(100,50,200,175);
}*/


