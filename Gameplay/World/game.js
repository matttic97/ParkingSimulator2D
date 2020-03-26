class Game{

    constructor(level){
        this.level = level;

        this.car = new Car(new Vector2D(150, 100), 0, true, true);
    }

    draw(){
        background(174, 171, 171);
        this.car.draw();
    }

    update(keys){
        this.car.update(keys);
    }

}