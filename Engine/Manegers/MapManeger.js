class MapManeger{

    constructor(GameObject,filePath,lenX,lenY){
        this.img=0;
        this.GameObject=GameObject;
        this.mapArray;
        this.filePath=filePath;
        this.lenX=lenX;
        this.lenY=lenY;
       
        this.createImageArray();
        this.createMap();
    }

   createImageArray() {
    var img = document.getElementById("level1");
    var canvas=document.getElementById("gameCanvas")
    var ctx=canvas.getContext("2d")
    ctx.drawImage(img,0,0,this.lenX,this.lenY)
    let imgdata=ctx.getImageData(0, 0, this.lenX,this.lenY).data;
    this.mapArray = new Array(this.lenX).fill(0).map(() => new Array(this.lenY).fill(0));
    for(let x=0; x<this.lenX;x++){
      for(let y=0;y<this.lenY;y++){
            var index=(x+y*this.lenX)*4;
            this.mapArray[x][y]= this.rgbToHex(imgdata[index],imgdata[index+1],imgdata[index+2]);
            }
        }
    }


    setup() {

    }


    rgbToHex(r,g,b){
        return (r.toString(16)+g.toString(16)+b.toString(16));
    }
    createMap(){

    let mapSize=[this.lenX,this.lenY] //resolucija naše mape
    let XDivide=canvasWidth/mapSize[0];
    let YDivide=canvasHeight/mapSize[1];


        for(let x=0;x<mapSize[0];x++){
            for(let y=0;y<mapSize[1];y++){

               let position=new Vector2D(x*XDivide+XDivide/2,y*YDivide+YDivide/2);
              // console.log(this.mapArray[x][y])
               
                switch(this.mapArray[x][y]){
                    case "00ff": 
                        this.GameObject.CarManeger.createCar(position,0);
                        
                    break;

                    case "00ff":
                        
                        this.GameObject.ParkingSpotManeger.createParkingSpot(position,0,true);
                    break;

                    case "ff00":
                        this.GameObject.WallManeger.createWall(position,new Vector2D(XDivide,YDivide),0);
                    
                    break;

                }
            }
        }
    }


}