class Game{

    constructor(level){
        this.level = level;
        this.WallManeger = new WallManeger();
        this.car = new Car(new Vector2D(150, 100), 39);
    }

    draw(){
        background(174, 171, 171);
        this.car.draw();
        this.WallManeger.draw()
    }

    update(keys){
        this.car.update(keys);
        this.WallManeger.update();
    }

}