class Wall extends CollidableSprite{
    constructor(position, size, angle){
        super(position, 'rect', size, angle);
    }

    draw() {
        push();
        fill(255,12,245)
        stroke('black');
        translate(this.position.X, this.position.Y);
        rotate(this.angle)
        rect(0,0, this.size.X, this.size.Y);
        noFill();
        pop();
        
    }

    update(){
    }


 
    getCenter(){
        return new Vector2D(this.position.X + this.size.X / 2, this.position.Y + this.size.Y / 2)
    }
}
