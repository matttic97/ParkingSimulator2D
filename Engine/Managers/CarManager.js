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

    update(keys){ //update nam returna FALSE, kadar se vsi avti zabijejo ali izteče čas avtu.(ko postane drivable=false)
        let disabedCars=0;
        for(let car of this.carsArray){
            car.update(keys)
            if (car.drivable==false)disabedCars++;
       }
       if (disabedCars>=this.carsArray.length) return false;
       else return true;
    }

    createCar(position,angle,drivable){
        let tmpPos=new Vector2D(position.X,position.Y)
        let createdObj=new Car(this.gameObject,tmpPos, angle, drivable,this.bestBrainsArray[this.carIndex]);
        this.carsArray[this.carIndex] = createdObj
        this.carIndex++;
        return createdObj;
    }

    spawnCars(position){ //spawnamo število avtov
        for(let i=0;i<this.numberOfCars;i++){
        this.createCar(position, 0, true)
        }
    }

    firstGeneration(position, numberOfCars){ //inicializiramo prvo generacijo
        this.numberOfCars = numberOfCars
        this.spawnCars(position, numberOfCars);
    }

    nextGeneration(position, pctSelection, deviation){

        //dobimo braine o prvih SELECTION najboljsih  avtov. 
    let selection = Math.ceil(this.numberOfCars*pctSelection/100)
    console.log(selection)
    let bestCarBrains=[]
    let currentBestCar;
    for (let i=0;i<selection;i++){
         let bestCarScore=-Infinity;
        for(let car of this.carsArray){
            if (car.score> bestCarScore){
                bestCarScore=car.score;
                bestCarBrains[i]=car.brains.copy();
                currentBestCar=car;
            }
        }
        for(let car of this.carsArray){
          if((Vector2D.distance(car.position, currentBestCar.position) < currentBestCar.size.Y)) car.score = -Infinity; //izvzemi ven tiste ki so nagručeni
        }
    if((typeof bestCarBrains[i]!=='object')){bestCarBrains[i]=bestCarBrains[0].copy();}//če zmanjka unkiatnih avtov, se zapolnejo z taprvimi najboljšimi
 //s izkljucimo prvega najboljsega vn. in tako dalje da bo naslednji v arrayu bil drugi najboljši.
    }
  

    this.bestBrainsArray=[];
    for(let i=selection;i<this.numberOfCars;i++){
    let tmpBestCarBrains=bestCarBrains[i%selection].copy(); // tukaj izmed selekcije izberemo in jih zmutiramo (narejeno da se ekvivalentno reproducirajo)
    tmpBestCarBrains.mutate(1, deviation);
    this.bestBrainsArray[i]=tmpBestCarBrains;
    }

   for(let i=0;i<selection;i++){
     this.bestBrainsArray[i]=bestCarBrains[i].copy(); //da ševedno ohranimo ta prvih SELECTION  najbočših ce so drugi slabsi.
        }    
   
    this.carsArray=[];
    this.carIndex=0;
    this.spawnCars(position,this.numberOfCars);
    }



}