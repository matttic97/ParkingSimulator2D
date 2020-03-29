class Game{

    constructor(level){
        this.level = level;
        this.WallManeger = new WallManeger();
        console.log(height);
        this.WallManeger.createAxisWall('x', new Vector2D(400, 600), 6);
        this.ParkingSpotManeger = new ParkingSpotManeger();
        this.ParkingSpotManeger.createMultiplePargingSpots();
        this.car = new Car(new Vector2D(650, 100), 0);
    }

    draw(){
        background(174, 171, 171);
        this.ParkingSpotManeger.draw()
        this.car.draw();
    }

    update(keys){
        this.ParkingSpotManeger.update()
        this.car.update(keys);
        this.WallManeger.update();
    }



}