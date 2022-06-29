class Game{

    constructor(level, updateCycles){
        /*V vse Managerje moramo dat objekt od Game, da lahko pol ve na kateri game naj se nanša,
        ker Managerji samo managajo , game class je glavni*/
        this.WallManager = new WallManager(this);
        this.ParkingspotManager = new ParkingspotManager(this);
        this.CarManager = new CarManager(this);
        this.MapManager = new MapManager(this)
        this.parkingspot=this.ParkingspotManager.createParkingspot(new Vector2D(900, 700), 3, false);
        this.CarManager.firstGeneration(new Vector2D(300, 100), 100);
        //this.car = new Car(this, new Vector2D(400, 200), 0, true, null)
        this.updateCycles = updateCycles;
    }

    draw(){
        background(174, 171, 171);
        this.ParkingspotManager.draw();
        this.WallManager.draw();
        this.CarManager.draw();
        //this.car.draw();
    }

    update(keys){
        for(let i = 0; i < this.updateCycles; i++){
            this.ParkingspotManager.update()
            this.WallManager.update();
            //this.car.update(keys);
            let populationStatus=this.CarManager.update(keys);
            if(!populationStatus)
                this.CarManager.nextGeneration(new Vector2D(300, 100), 4, 0.08) //pozicija,10-koliko procentov izmed prvih avtov vzamemo,0.15-devijacija
        }
    }

    setUpdateCycles(n){
        this.updateCycles = n;
    }

}