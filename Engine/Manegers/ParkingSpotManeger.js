class ParkingSpotManeger{
    constructor(){
        this.parkingSpotsArray = [];
        this.parkingSpotIndex = 0;
    }

    createMultiplePargingSpots(){
        this.createParkingSpot(new Vector2D(200, 20), 1, true);
        this.createParkingSpot(new Vector2D(200, 110), 1, false);
        this.createParkingSpot(new Vector2D(200, 290), 1, false);
        this.createParkingSpot(new Vector2D(200, 380), 1, true);
        this.createParkingSpot(new Vector2D(210, 380), 3, true);
        this.createParkingSpot(new Vector2D(210, 470), 3, false);
    }

    createParkingSpot(position, qadrant, occupied){
        this.parkingSpotsArray[this.parkingSpotIndex] = new ParkingSpot(position, qadrant, occupied);
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