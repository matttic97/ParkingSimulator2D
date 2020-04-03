class Wall extends CollidableSprite{
    constructor(gameObject,position, size, angle){
        super(position, 'rect', size, angle);
        this.color="purple"
        this.objName="wall"
        this.gameObject=gameObject
    }

    draw() {
        push();
        fill(this.color)
        stroke('black');
        translate(this.position.X, this.position.Y);
        rotate(this.angle)
        rect(0,0, this.size.X, this.size.Y);
        noFill();
        pop();
        
    }

    update(){
    }

    collisionEvent(withObj){

        this.color="white"

    }
 
    getCenter(){
        return new Vector2D(this.position.X + this.size.X / 2, this.position.Y + this.size.Y / 2)
    }
}
