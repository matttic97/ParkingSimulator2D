class ParkingSpot extends CollidableSprite {

    constructor(position, qadrant, occupied){
        super(position, 'rect');

        this.position = position;
        this.qadrant = qadrant;
        this.occupied = occupied;

        this.size = new Vector2D(130, 90);
        this.line_width = 10;

        this.car_color = color(random(255),random(255),random(255));
    }

    update(){

    }

    draw(){
        push();
        noStroke(); 
        fill(255, 255, 255);
        // translate(this.position.X + this.size.X, this.position.Y + this.size.Y);
        // rotate((this.qadrant - 1) * 90);
        rect(this.position.X + this.size.X / 2, this.position.Y + this.line_width / 2, this.size.X, this.line_width);
        rect(this.position.X + this.line_width / 2,
             this.position.Y + this.size.Y / 2 + this.line_width / 2,
             this.line_width, this.size.Y);
        rect(this.position.X + this.size.X / 2, this.position.Y + this.size.Y + this.line_width / 2, this.size.X, this.line_width);
        noFill();
        if(this.occupied){
            fill(this.car_color);
            rect(this.position.X + 70, this.position.Y + 50, 100, 50);
        }
        pop();
    }

}