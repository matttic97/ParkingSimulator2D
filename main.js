var car;

function setup(){
    createCanvas(800, 800);
    car = new Car(new Vector2D(40, 40), 0);

    rectMode(CENTER);
    angleMode(DEGREES);
}

function draw(){
    background(174,171,171);
    car.draw();
    car.update(keys);
}

var keys = {}
document.onkeydown = function(e){
    (e.key == " ") ?
        keys['Space'] = true
    :
        keys[e.key] = true;
}
document.onkeyup = function(e){
    (e.key == " ") ?
        keys['Space'] = false
    :
        keys[e.key] = false;
}