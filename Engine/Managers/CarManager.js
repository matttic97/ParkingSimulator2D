class CarManager{
    constructor(gameObject){
        this.carsArray=[];
        this.bestBrainsArray=[];
        this.carIndex=0;
        this.gameObject=gameObject
        this.numberOfCars=0;
    }



    draw() {
        for(var i=0;i<this.numberOfCars;i++){
            this.carsArray[i].draw()
        }
    }

    update(keys){ //update nam returna FALSE, kadar se vsi avti zabijejo ali izteče čas avtu.(ko postane drivable=false)
        var disabedCars=0;
        for(var i=0;i<this.numberOfCars;i++){
            this.carsArray[i].update(keys)
            if (this.carsArray[i].drivable==false)disabedCars++;
       }
       if (disabedCars>=this.numberOfCars) return false;
       else return true;
    }

    createCar(position,angle,drivable){
        var tmpPos=new Vector2D(position.X,position.Y)
        var createdObj=new Car(this.gameObject,tmpPos, angle, drivable,this.bestBrainsArray[this.carIndex]);
        this.carsArray[this.carIndex] = createdObj
        this.carIndex++;
        return createdObj;
    }

    spawnCars(position){ //spawnamo število avtov
        for(var i=0;i<this.numberOfCars;i++){
        this.createCar(position, 0, true)
        }
    }

    firstGeneration(position, numberOfCars){ //inicializiramo prvo generacijo
        this.numberOfCars = numberOfCars
        this.spawnCars(position, numberOfCars);
    }

    nextGeneration(position, pctSelection, deviation){

        //dobimo braine o prvih SELECTION najboljsih  avtov. 
    var selection = Math.ceil(this.numberOfCars*pctSelection/100)
    console.log(selection)
    var bestCarBrains=[]
    var currentBestCar;
    for (var i=0;i<selection;i++){
         var bestCarScore=-Infinity;
        for(var car of this.carsArray){
            if (car.score> bestCarScore){
                bestCarScore=car.score;
                bestCarBrains[i]=car.brains.copy();
                currentBestCar=car;
            }
        }
        for(var car of this.carsArray){
          if((Vector2D.distance(car.position, currentBestCar.position) < currentBestCar.size.Y)) car.score = -Infinity; //izvzemi ven tiste ki so nagručeni
        }
    if((typeof bestCarBrains[i]!=='object')){bestCarBrains[i]=bestCarBrains[0].copy();}//če zmanjka unkiatnih avtov, se zapolnejo z taprvimi najboljšimi
 //s izkljucimo prvega najboljsega vn. in tako dalje da bo naslednji v arrayu bil drugi najboljši.
    }
  

    this.bestBrainsArray=[];
    for(var i=selection;i<this.numberOfCars;i++){
    var tmpBestCarBrains=bestCarBrains[i%selection].copy(); // tukaj izmed selekcije izberemo in jih zmutiramo (narejeno da se ekvivalentno reproducirajo)
    tmpBestCarBrains.mutate(1, deviation);
    this.bestBrainsArray[i]=tmpBestCarBrains;
    }

   for(var i=0;i<selection;i++){
     this.bestBrainsArray[i]=bestCarBrains[i].copy(); //da ševedno ohranimo ta prvih SELECTION  najbočših ce so drugi slabsi.
        }    
   
    this.carsArray=[];
    this.carIndex=0;
    this.spawnCars(position,this.numberOfCars);
    }



}