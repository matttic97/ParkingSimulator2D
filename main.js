var game;
const canvasWidth = 1200;
const canvasHeight = 800;
const canvasMaxPossibileDistance = Math.sqrt(canvasWidth*canvasWidth+canvasHeight*canvasHeight);

var buttonSave;
var buttonLoad;

function setup(){
    createCanvas(canvasWidth, canvasHeight);
    rectMode(CENTER);
    angleMode(DEGREES);
    
    slider = createSlider(1, 100, 1);
    buttonSave =createButton('saveBest')
    buttonLoad =createFileInput(loadBest)
    buttonSave.mousePressed(saveBest)

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

function loadBest(file){

    var base64Str=file.data.split(",")[1]
    var jsonStr=atob(base64Str)
    objBrain=NeuralNetwork_FF.deserialize(jsonStr)
    game.CarManager.loadBestCar(objBrain)
}

function saveBest(){

var objdataString=game.CarManager.saveBestCar()

saveJSON(objdataString,'car.json');


}