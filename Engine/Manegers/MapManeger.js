class MapManeger{

    constructor(GameObject,filePath,lenX,lenY){
        this.img=0;
        this.GameObject=GameObject;
        this.mapArray= new Array(this.lenX).fill(0).map(() => new Array(this.lenY).fill(0));
        this.filePath=filePath;
        this.lenX=lenX;
        this.lenY=lenY;
       
        this.preload();
       // this.createMap();

    }

   preload() {
    //debugger;
    var img = document.getElementById("level1ID");
    var canvas=document.getElementById("gameCanvas")
    var ctx=canvas.getContext("2d")
    ctx.drawImage(img,0,0,this.lenX-1,this.lenY-1)
    let imgdata=ctx.getImageData(0, 0, this.lenX-1,this.lenY-1);
    console.log(imgdata)

    }


    setup() {
         dataArray = new Array(this.lenX).fill(0).map(() => new Array(this.lenY).fill(0));
        for(let x=0; x<lenX;x++){
            for(let y=0;y<lenY;y++){
            dataArray[x][y]= this.rgbToHex(imgdata[0],imgdata[1],imgdata[2]);
            }
        }
                 this.mapArray=dataArray;
    this.createMap()
    }


    rgbToHex(r,g,b){
        return "#"+r.toString(16)+g.toString(16)+b.toString(16);

    }
    createMap(){

        //1-avto
        //2-parking
        //3-zid
    //let mapArray=this.mapArray
   let mapArray=[         
        [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
        [3,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,3], 
        [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,3], 
        [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,3], 
        [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,3], 
        [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,0,0,3], 
        [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,0,0,3], 
        [3,0,0,3,3,3,3,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,3], 
        [3,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3], 
        [3,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3], 
        [3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3], 
        [3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,3], 
        [3,0,0,3,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,3], 
        [3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3], 
        [3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3], 
        [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
           
    ]
    let mapSize=[mapArray[0].length,mapArray.length] //resolucija naše mape
    let XDivide=canvasWidth/mapSize[0];
    let YDivide=canvasHeight/mapSize[1];


        for(let x=0;x<mapSize[0];x++){
            for(let y=0;y<mapSize[1];y++){

               let position=new Vector2D(x*XDivide+XDivide/2,y*YDivide+YDivide/2);
               
                switch(mapArray[y][x]){
                    case 1: 
                        this.GameObject.CarManeger.createCar(position,0);
                        
                    break;

                    case 2:
                        
                        this.GameObject.ParkingSpotManeger.createParkingSpot(position,0,true);
                    break;

                    case 3:
                        this.GameObject.WallManeger.createWall(position,new Vector2D(XDivide,YDivide),0);
                    
                    break;

                }
            }
        }
    }


}