class Game{

    constructor(level){
        this.level = level;
        this.WallManeger = new WallManeger();
        this.ParkingSpotManeger=new ParkingSpotManeger();
        this.car = new Car(new Vector2D(650, 100), 0);
    }

    draw(){
        background(174, 171, 171);
      this.ParkingSpotManeger.draw()
        this.car.draw();
        this.WallManeger.draw()
    }

    update(keys){
         this.ParkingSpotManeger.update()
        this.car.update(keys);
        this.WallManeger.update();
    }



}