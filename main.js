var game;
const canvasWidth = 1200;
const canvasHeight = 800;
const canvasMaxPossibileDistance = Math.sqrt(canvasWidth*canvasWidth+canvasHeight*canvasHeight);

function setup(){
    createCanvas(canvasWidth, canvasHeight);
    rectMode(CENTER);
    angleMode(DEGREES);
    
    slider = createSlider(1, 100, 1);

    game = new Game(1,1);
}

function draw(){
    game.setUpdateCycles(slider.value());
    
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
