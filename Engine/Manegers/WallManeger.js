class WallManeger{
    constructor(){

        this.WallsArray=[];
        this.wallIndex=0;
        this.createWall(new Vector2D(150,150),new Vector2D(40,50),0,new Array(255,2,22))
    }

    createWall(position,size,angle){
        this.WallsArray[this.wallIndex]= new Wall(position,size,angle,color);
        this.wallIndex++;
    }

    draw() {
        for(let wall of this.WallsArray){
            wall.draw()
        }
    }

    update(){
    
        for(let wall of this.WallsArray){
            wall.update()
        }
    }
}