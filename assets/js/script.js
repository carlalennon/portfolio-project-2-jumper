let playerSprite = document.getElementById("sprite");

// Setting up the canvas to have context and be drawn on 
let canvas;
let context;

window.onload = contextForCanvas;

function contextForCanvas(){
        canvas = document.getElementById("canvas");
        context = canvas.getContext("2d");
        
        draw();
}