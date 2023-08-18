

// Setting up the canvas to have context and be drawn on 
let canvas;
let context;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
let playerSprite = document.getElementById("sprite");

// Canvas height 1080

window.onload = function() {
    //Page is now loaded 
    let playerSprite = document.getElementById("sprite");
    context.drawImage(playerSprite, 50,900);
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


