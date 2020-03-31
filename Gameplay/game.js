class Game{

    constructor(level){
        this.WallManeger = new WallManeger();
        this.ParkingSpotManeger = new ParkingSpotManeger();
        this.CarManeger=new CarManeger();



        this.MapManeger= new MapManeger(this,"level1",30,20);
        /*Map manegerju moramo dat objekt od Game, da lahko pol spawna objecte v tem Game classu,
        ker MapManeger samo creata map, drawa pa ga Game class*/
     

    }

    draw(){
        background(174, 171, 171);
        this.ParkingSpotManeger.draw();
        this.WallManeger.draw();
        this.CarManeger.draw();
    }

    update(keys){
        this.ParkingSpotManeger.update()
        this.CarManeger.update(keys);
        this.WallManeger.update();
    }



}