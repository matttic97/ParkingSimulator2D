class Wall extends CollidableSprite{
    constructor(position,size,angle,color){
        super(position)
        this.position = position;
        this.size = size;
        this.color=color;
        this.StartAngle = angle;
    }

    draw() {
        push()
        fill(color[0],color[1],color[2])
        stroke('black');
        translate(this.position.X + this.size.X, this.position.Y + this.size.Y);
        rotate(this.StartAngle)
        rect(0, 0, this.size.X, this.size.Y);
        noFill();
        pop()
        
    }

    update(){
    }


 
    getCenter(){
        return new Vector2D(this.position.X + this.size.X/2, this.position.Y + this.size.Y/2)
    }
}
