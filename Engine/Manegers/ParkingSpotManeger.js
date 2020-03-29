class ParkingSpotManeger{
    constructor(){
        this.parkingSpotsArray=[];
        this.parkingSpotIndex=0;
        this.createMultiplePargingSpots();
    }

    createMultiplePargingSpots(){
       
        this.createParkingSpot(new Vector2D(20, 20), 2, true);
        this.createParkingSpot(new Vector2D(20, 110), 1, false);
        this.createParkingSpot(new Vector2D(20, 290), 1, false);
        this.createParkingSpot(new Vector2D(20, 380), 1, true);
        this.createParkingSpot(new Vector2D(20, 470), 1, false);
        this.createParkingSpot(new Vector2D(20, 560), 1, false);
        this.createParkingSpot(new Vector2D(20, 650), 2, false);



    }

    createParkingSpot(position,qadrant,occupied){
        this.parkingSpotsArray[this.parkingSpotIndex]=new ParkingSpot(position,qadrant,occupied);
        this.parkingSpotIndex++;
    }
    draw() {
        for(let spot of this.parkingSpotsArray){
            spot.draw()
        }
    }

    update(){
        for(let spot of this.parkingSpotsArray){
            spot.update()
        }
    }
}