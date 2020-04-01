class MapManager{

    constructor(gameObject){
        this.gameObject = gameObject;

    }

    createMap(mapArray1){

        //1-avto
        //2-parking
        //3-zid
   let mapArray=[         
        [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
        [3,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,3], 
        [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,3], 
        [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,3], 
        [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,3], 
        [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,0,0,3], 
        [3,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,3,3,3,3,0,0,0,3], 
        [3,0,0,3,3,3,3,0,0,3,2,3,0,0,0,0,0,0,0,0,0,0,0,3], 
        [3,0,0,3,0,0,3,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,3], 
        [3,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3], 
        [3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3], 
        [3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,3], 
        [3,0,0,3,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,3], 
        [3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3], 
        [3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3], 
        [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
           
    ]
    let mapSize = [mapArray[0].length,mapArray.length] //resolucija naše mape
    let XDivide = canvasWidth / mapSize[0];
    let YDivide = canvasHeight / mapSize[1];


        for(let x = 0; x < mapSize[0]; x++){
            for(let y = 0; y < mapSize[1]; y++){

               let position = new Vector2D(x * XDivide + XDivide / 2, y * YDivide + YDivide / 2);
               
                switch(mapArray[y][x]){
                    case 1: 
                        this.gameObject.CarManager.createCar(position, 0,false);
                        
                    break;

                    case 2:
                        //console.log(position)
                        this.gameObject.ParkingspotManager.createParkingspot(position, 1, true);
                    break;

                    case 3:
                        this.gameObject.WallManager.createWall(position, new Vector2D(XDivide, YDivide), 0);
                        
                    break;

                }
            }
        }
    }


}