class CarManager{
    constructor(gameObject){
        this.carsArray=[];
        this.bestBrainsArray=[];
        this.carIndex=0;
        this.gameObject=gameObject
        this.numberOfCars=0;
    }



    draw() {
        for(let car of this.carsArray){
            car.draw()
        }
    }

    update(keys){
        let disabedCars=0;
        for(let car of this.carsArray){
            car.update(keys)
            if (car.drivable==false)disabedCars++;
       }
       if (disabedCars>=this.carsArray.length) return false;
       else return true;
    }

    createCar(position,angle,drivable){
       
        let createdObj=new Car(this.gameObject,new Vector2D(500, 100), angle, drivable,this.bestBrainsArray[this.carIndex]);
        this.carsArray[this.carIndex] = createdObj
        this.carIndex++;
        return createdObj;
    }

    spawnCars(position){
        for(let i=0;i<this.numberOfCars;i++){
        this.createCar(position, 0, true)
        }
    }

    firstGeneration(position,numberOfCars){
        this.numberOfCars=numberOfCars
    this.spawnCars(position,numberOfCars);
    }

    nextGeneration(position){
    let bestCarBrains=this.carsArray[0].brains.copy();
    let bestCarFitness=this.carsArray[0].score;
    for(let car of this.carsArray){
        if (car.score> bestCarFitness){
            bestCarFitness=car.score;
            bestCarBrains=car.brains.copy();
        }
     }
 console.log(bestCarFitness)
    this.bestBrainsArray=[];
    for(let i=0;i<this.numberOfCars;i++){
    this.bestBrainsArray[i]=bestCarBrains.copy().mutate(0.1)
    }
    console.log(this.bestBrainsArray)
    this.carsArray=[];
    this.carIndex=0;
    this.spawnCars(position,this.numberOfCars);
    }



}