class CarManager{
    constructor(gameObject){
        this.carsArray=[];
        this.carIndex=0;
        this.gameObject=gameObject
    }

    createCar(position,angle,drivable){
        this.carsArray[this.carIndex] = new Car(this.gameObject,position, angle, drivable);
        this.carIndex++;
    }

    draw() {
        for(let car of this.carsArray){
            car.draw()
        }
    }

    update(keys){
    
        for(let car of this.carsArray){
            car.update(keys)
       }
    }
}