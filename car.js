class Car{
    constructor(position, angle){
        this.position = position;
        this.car_angle = angle;

        this.size = new Vector2D(100, 50);
        this.velocity = Vector2D.zeros();
        this.car_direction = Vector2D.zeros();
        this.steer_direction = Vector2D.zeros();
        this.steer_angle = angle;

        this.senzor_reach = 200;
        this.speed = 4;
        this.gear = 0;  // -1=reverse, 0=neutral, 1=forward
        this.break_power = 2;
    }

    draw() {
        stroke('black');
        translate(this.position.X + this.size.X, this.position.Y + this.size.Y);
        if(this.gear < 0)
            rotate(-this.car_angle);
        else
            rotate(this.car_angle); 
        rect(0, 0, this.size.X, this.size.Y);
        fill(255, 0, 0);

        this.drawSenzors();
    }

    drawSenzors(){
        stroke('green');
        line(1, 0, this.senzor_reach/2, 0);
        line(-1, 0, -this.senzor_reach/2, 0);
        line(0, 1, 0, this.senzor_reach/2);
        line(0, -1, 0, -this.senzor_reach/2);

        stroke('blue');
        line(0, 0, this.steer_direction.X, this.steer_direction.Y);
    }

    update(keys){
        this.setSteerDirection();
        this.setCarDirection();
        
        this.move(keys);        

        this.position.add(this.velocity);

        this.velocity = Vector2D.zeros();
    }

    move(keys){
        // if(keys['Space']){
        //     this.break();
        //     return;
        // }            
            
        if(keys['ArrowDown'])
            this.moveBack();
        else if(keys['ArrowUp'])
            this.moveOn();

        if(keys['ArrowLeft'])
            this.moveLeft();
        else if(keys['ArrowRight'])
            this.moveRight();
        else
            this.align();
    }
    moveLeft(){
        if(this.steer_angle > -20)
            this.steer_angle--;
        if(this.velocity.X != 0 || this.velocity.Y != 0)
            this.car_angle--;
    }
    moveRight(){
        if(this.steer_angle < 20)
            this.steer_angle++;
        if(this.velocity.X != 0 || this.velocity.Y != 0)
            this.car_angle++;
    }
    align(){
        this.steer_angle = 0;
    }
    moveOn(){
        this.gear = 1;
        this.velocity = this.car_direction;
    }
    moveBack(){
        this.gear = -1;
        this.velocity = this.car_direction;
    }
    break(){
        gear = 0;
        this.velocity.devide(this.break_power);
    }

    setSteerDirection(){
        let a = math.cos(math.unit(this.steer_angle, 'deg'));
        let b = math.sin(math.unit(this.steer_angle, 'deg'));

        this.steer_direction = new Vector2D(a, b);
    }
    setCarDirection(){
        let angle = this.car_angle;
        let speed = this.speed;
        if(this.gear < 0){
            //this.car_angle *= -1;
            //speed *= -1;
        }
            
        let a = math.cos(math.unit(angle, 'deg'))*this.speed;
        let b = math.sin(math.unit(angle, 'deg'))*this.speed;
        if(this.gear < 0){
            a *= -1;
            //b *= -1;
        }
        //console.log(a + ' ' + b);
        this.car_direction = new Vector2D(a, b);
    }
 
    getCenter(){
        return new Vector2D(this.position.X + this.size.X/2, this.position.Y + this.size.Y/2)
    }

}