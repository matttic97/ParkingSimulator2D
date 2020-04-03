class Game{

    constructor(level){

           /*V vse Managerje moramo dat objekt od Game, da lahko pol ve na kateri game naj se nanša,
        ker Managerji samo managajo , game clss je glavni*/
        this.WallManager = new WallManager(this);
        this.ParkingspotManager = new ParkingspotManager(this);
        this.CarManager = new CarManager(this);
        this.MapManager = new MapManager(this)
     

       this.CarManager.createCar(new Vector2D(300, 100), 0, true)
    }

    draw(){
        background(174, 171, 171);
        this.ParkingspotManager.draw();
        this.WallManager.draw();
        this.CarManager.draw();

    }

    update(keys){
        this.ParkingspotManager.update()
        this.CarManager.update(keys);
        this.WallManager.update();
    }



}