class ParkingSpot extends CollidableSprite {

    constructor(position, qadrant, occupied){
        super(position, 'rect');

        this.position = position;
        this.qadrant = qadrant;
        this.occupied = occupied;

        this.size = new Vector2D(130, 90);
        this.line_width = 10;

        this.car_color = color(random(255), random(255), random(255));
    }

    update(){

    }

    draw(){
        push();

        translate(this.position.X, this.position.Y);
        rotate((this.qadrant - 1) * 90);

        noStroke(); 
        fill(255, 255, 255);
        rect(this.size.X / 2, 0, this.size.X, this.line_width);
        rect(this.line_width / 2, this.size.Y / 2, this.line_width, this.size.Y);
        rect(this.size.X / 2, this.size.Y, this.size.X, this.line_width);
        noFill();

        if(this.occupied){
            fill(this.car_color);
            rect(70, 45, 100, 50);
        }

        pop();
    }

}