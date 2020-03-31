var game;
let gameCanvas;
const canvasWidth=1200;
const canvasHeight=800;

function setup(){
    gameCanvas=createCanvas(canvasWidth, canvasHeight);
    gameCanvas.id("gameCanvas");
    rectMode(CENTER);
    angleMode(DEGREES);

    game = new Game(1);
}

function draw(){
    game.update(keys);
    game.draw();
}

// input
var keys = {}
document.onkeydown = function(e){
    (e.key == " ") ? keys['Space'] = true : keys[e.key] = true;
}
document.onkeyup = function(e){
    (e.key == " ") ? keys['Space'] = false : keys[e.key] = false;
}
