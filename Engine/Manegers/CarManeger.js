class CarManeger{
    constructor(){
        this.CarsArray=[];
        this.CarIndex=0;
    }

    createCar(position,angle){
        this.CarsArray[this.CarIndex]= new Car(position,angle);
        this.CarIndex++;
    }

    draw() {
        for(let car of this.CarsArray){
            car.draw()
        }
    }

    update(keys){
    
        for(let car of this.CarsArray){
            car.update(keys)
        }
    }
}