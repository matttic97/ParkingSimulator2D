class Wall extends CollidableSprite{

    // const
    // static get SIZE(){
    //     return 50;
    // }

    constructor(position, size, angle){
        super(position);

        this.size = size;
        this.StartAngle = angle;
    }

    draw() {
        push();
        fill(0, 255, 0);
        stroke('black');
        // translate(this.position.X + this.size.X / 2, this.position.Y + this.size.Y / 2);
        // rotate(this.StartAngle)
        rect(this.position.X, this.position.Y, Wall.SIZE, Wall.SIZE);
        noFill();
        pop();
        
    }

    update(){
    }


 
    getCenter(){
        return new Vector2D(this.position.X + this.size.X/2, this.position.Y + this.size.Y/2)
    }
}
