class ParkingspotManager{
    constructor(gameObject){
        this.parkingspotsArray = [];
        this.parkingspotIndex = 0;
        this.gameObject=gameObject
    }


    createParkingspot(position, qadrant, occupied){
        this.parkingspotsArray[this.parkingspotIndex] = new Parkingspot(this.gameObject,position, qadrant, occupied);
        this.parkingspotIndex++;
    }

    draw() {
        for(let spot of this.parkingspotsArray){
            spot.draw()
        }
    }

    update(){
        for(let spot of this.parkingspotsArray){
            spot.update()
        }
    }
}