class WallManager{

    constructor(){
        this.WallsArray=[];
        this.wallIndex=0;
    }

    createWall(position, size, angle){
        this.WallsArray[this.wallIndex] = new Wall(position, size, angle);
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