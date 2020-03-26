var game;

function setup(){
    createCanvas(1200, 800);
    rectMode(CENTER);
    angleMode(DEGREES);

    game = new Game(1);
}

function draw(){
    game.draw();
    game.update(keys);
}

// input
var keys = {}
document.onkeydown = function(e){
    (e.key == " ") ? keys['Space'] = true : keys[e.key] = true;
}
document.onkeyup = function(e){
    (e.key == " ") ? keys['Space'] = false : keys[e.key] = false;
}