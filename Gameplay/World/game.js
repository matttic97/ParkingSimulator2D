class Game{

    constructor(level){
        this.level = level;
        this.WallManeger = new WallManeger();

        this.car = new Car(new Vector2D(650, 100), 0);

        this.spots = [
            new ParkingSpot(new Vector2D(20, 20), 2, true),
            new ParkingSpot(new Vector2D(20, 110), 1, false),
            new ParkingSpot(new Vector2D(20, 200), 1, false),
            new ParkingSpot(new Vector2D(20, 290), 1, false),
            new ParkingSpot(new Vector2D(20, 380), 1, true),
            new ParkingSpot(new Vector2D(20, 470), 1, false),
            new ParkingSpot(new Vector2D(20, 560), 1, false),
            new ParkingSpot(new Vector2D(20, 650), 2, false),
        ];
    }

    draw(){
        background(174, 171, 171);

        for(let spot of this.spots)
            spot.draw();
        
        this.car.draw();
        this.WallManeger.draw()
    }

    update(keys){
        this.car.update(keys);
        this.WallManeger.update();
    }



}