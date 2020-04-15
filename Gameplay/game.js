class Game{

    constructor(level, updateCycles){
        /*V vse Managerje moramo dat objekt od Game, da lahko pol ve na kateri game naj se nanša,
        ker Managerji samo managajo , game class je glavni*/
        this.WallManager = new WallManager(this);
        this.ParkingspotManager = new ParkingspotManager(this);
        this.CarManager = new CarManager(this);
        this.deepQCarManager = new DeepQCarManager(this);
        this.MapManager = new MapManager(this)
        this.parkingspot=this.ParkingspotManager.createParkingspot(new Vector2D(200, 400), 3, false);
        this.CarManager.firstGeneration(new Vector2D(300, 100), 5,20,0.5);
        this.deepQCarManager.firstEpisode(new Vector2D(300, 100),1);
        this.updateCycles = updateCycles;
    }

    draw(){
        background(174, 171, 171);
        this.ParkingspotManager.draw();
        this.WallManager.draw();
        this.CarManager.draw();
        this.deepQCarManager.draw();
       
    }

    update(keys){
        for(var i = 0; i < this.updateCycles; i++){
            this.ParkingspotManager.update()
            this.WallManager.update();
         
            this.CarManager.update(keys);
            this.deepQCarManager.update(keys);
            
        }
    }

    setUpdateCycles(n){
        this.updateCycles = n;
    }

}