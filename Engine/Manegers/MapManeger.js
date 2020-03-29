class MapManeger{

    constructor(GameObject){
        this.GameObject=GameObject;

    }

    createMap(mapArray1){
   let mapArray=[         
        [3,3,3,3,3,3,3,3,3,3,3,3,3],
        [3,0,2,0,0,0,0,0,0,0,1,0,3], //DODANA JE ŠE ENA EXTRA VRSTICA IN EN EXTRA STOLPEC torej je 9*13, da lahko
        [3,0,0,0,0,0,0,0,0,0,0,0,3], // dosežemo še robove
        [3,0,2,0,0,0,0,0,0,0,0,0,3],
        [3,0,0,0,0,0,0,0,0,0,0,0,3],
        [3,0,2,0,0,0,0,0,0,0,0,0,3],
        [3,0,0,0,0,0,0,0,0,0,0,0,3],
        [3,0,0,0,0,0,0,0,0,0,0,0,3],
        [3,3,3,3,3,3,3,3,3,3,3,3,3],   
    ]
    let realMapSize=[canvasWidth,canvasHeight] //dejanska velikost v pixlih
    let mapSize=[12,8] //resolucija naše mape
    
    let XDivide=realMapSize[0]/mapSize[0];
    let YDivide=realMapSize[1]/mapSize[1];


        for(let x=0;x<=mapSize[0];x++){
            for(let y=0;y<=mapSize[1];y++){

               //let position=new Vector2D(x*XDivide+XDivide/2,y*YDivide+YDivide/2);
               let position=new Vector2D(x*XDivide,y*YDivide);
               
                switch(mapArray[y][x]){
                    case 1: 
                        this.GameObject.CarManeger.createCar(position,0);
                        
                    break;

                    case 2:
                        console.log(position)
                        this.GameObject.ParkingSpotManeger.createParkingSpot(position,0,true);
                    break;

                    case 3:
                        this.GameObject.WallManeger.createWall(position,new Vector2D(20,30),0);
                        console.log(position)
                    break;

                }
            }
        }
    }


}