class WallManeger{
    constructor(){

        this.wallsArray=[];
        this.wallIndex=0;
    }

    createWall(position,size,angle){
        this.WallsArray[this.wallIndex]= new Wall(position,size,angle);
        this.wallIndex++;
    }

    draw() {
        for(let i=0;i<=this.wallNumber;i++){
            this.wallsArray[i].draw()
        }
    }

    update(){
    
         for(let i=0;i<=this.wallNumber;i++){
            this.wallsArray[i].update()
        }
    }
}