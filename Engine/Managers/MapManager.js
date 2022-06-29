class MapManager{

    constructor(gameObject){
        this.gameObject = gameObject;
        this.createMap()
       
    }

    createMap(){
    
        //1-avto
        //2-parking
        //3-zid
   let mapArray=[         
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0], 
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,0,0,0], 
        [0,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0,3,3,3,0,0,0,0], 
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
        [0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,0,0], 
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
           
    ]
    let mapSize = [mapArray[0].length,mapArray.length] //resolucija naše mape
    let XDivide = canvasWidth / mapSize[0];
    let YDivide = canvasHeight / mapSize[1];
    this.spawnborders(XDivide,YDivide);

        for(let x = 0; x < mapSize[0]; x++){
            for(let y = 0; y < mapSize[1]; y++){

               let position = new Vector2D(x * XDivide + XDivide / 2, y * YDivide + YDivide / 2);
               
                switch(mapArray[y][x]){
                    case 1: 
                        this.gameObject.CarManager.createCar(position, 0,false);
                    break;

                    case 2:
                        this.gameObject.ParkingspotManager.createParkingspot(position, 1, false);
                    break;

                    case 3:
                        this.gameObject.WallManager.createWall(position, new Vector2D(XDivide, YDivide), 0);
                        
                    break;

                }
            }
        }
   
    }

spawnborders(XDivide,YDivide){
    this.gameObject.WallManager.createWall(new Vector2D(XDivide/2,canvasHeight/2), new Vector2D(XDivide, canvasHeight), 0);
    this.gameObject.WallManager.createWall(new Vector2D(canvasWidth-XDivide/2,canvasHeight/2), new Vector2D(XDivide, canvasHeight), 0);
    this.gameObject.WallManager.createWall(new Vector2D(canvasWidth/2,YDivide/2), new Vector2D(canvasWidth, YDivide), 0);
    this.gameObject.WallManager.createWall(new Vector2D(canvasWidth/2,canvasHeight-YDivide/2), new Vector2D(canvasWidth, YDivide), 0);
}

}