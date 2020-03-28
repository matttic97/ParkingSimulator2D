class Wall extends ColidableSprite{
    constructor(position,size,angle){
        super(position)
        this.position = position;
        this.size = size;
        this.StartAngle = angle;
    }

    draw() {
        fill(0,255,0)
        push()
        stroke('black');
        translate(this.position.X + this.size.X, this.position.Y + this.size.Y);
        rotate(this.StartAngle)
        rect(0, 0, this.size.X, this.size.Y);
        pop()
        
    }

    update(){
    }


 
    getCenter(){
        return new Vector2D(this.position.X + this.size.X/2, this.position.Y + this.size.Y/2)
    }
}



class WallManeger{
    constructor(){
        this.wallNumber = 5;
        this.WallsArray=[]
        for (let i=0;i<=this.wallNumber;i++){
            this.WallsArray[i]= new Wall(new Vector2D(60*i,60*i),new Vector2D(50,50),5*i);
        }
    }

    draw() {
        for(let i=0;i<=this.wallNumber;i++){
            this.WallsArray[i].draw()
        }
    }

    update(){
    
         for(let i=0;i<=this.wallNumber;i++){
            this.WallsArray[i].update()
        }
    }
}