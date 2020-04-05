class ParkingspotManager{
    constructor(gameObject){
        this.parkingspotsArray = [];
        this.parkingspotIndex = 0;
        this.gameObject=gameObject
    }


    createParkingspot(position, qadrant, occupied){
        let createdObj=new Parkingspot(this.gameObject,position, qadrant, occupied);
        this.parkingspotsArray[this.parkingspotIndex] =  createdObj
        this.parkingspotIndex++;
        return createdObj;
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