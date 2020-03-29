class WallManeger{
    constructor(){

        this.wallsArray = [];
        this.wallIndex = 0;
    }

    createWall(position, size, angle){
        console.log(position);
        this.wallsArray.push(new Wall(position, size, angle));
        console.log(this.wallsArray);
    }

    createAxisWall(axis, position, block_count){
        for(let i = 0; i < block_count; i++){
            var wall = new Wall(position, 50, 0);
            this.wallsArray.push(wall);
            position.X += 50;
            console.log(this.wallsArray);
        } 
    }

    draw() {
        // for(let wall of this.wallsArray){
        //     wall.draw();
        // }
    }

    update(){
         for(let wall of this.wallsArray){
            wall.update()
        }
    }
}