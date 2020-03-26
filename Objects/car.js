class Car{
    constructor(position, angle){
        this.position = position;

        this.size = new Vector2D(100, 50);
        this.velocity = Vector2D.zeros();
        this.car_direction = Vector2D.zeros();
        this.steer_angle = angle;
        this.acceleration=0.05
        this.friction=0.02

        this.senzor_reach = 200;
        this.speed = 0;
        this.maxspeed=4;
        this.gear = 0;  // -1=reverse, 0=neutral, 1=forward
        this.break_power = 2;
    }

    draw() {
        stroke('black');
        translate(this.position.X + this.size.X, this.position.Y + this.size.Y);
        rotate(this.steer_angle)
        rect(0, 0, this.size.X, this.size.Y);
        fill(255, 0, 0);
    }

    update(keys){
        this.move(keys);
        this.setCarDirection();  
        this.velocity = new Vector2D(this.car_direction.X*this.speed,this.car_direction.Y*this.speed);
        this.position.X+=this.velocity.X;
        this.position.Y+=this.velocity.Y;
        //this.velocity=new Vector2D(0,0)
    }

    move(keys){        
            
        if(keys['ArrowDown'])
            this.moveBack();
        else if(keys['ArrowUp'])
            this.moveOn();
        else 
            this.decelerate();

        if(keys['ArrowLeft'])
            this.moveLeft();
        else if(keys['ArrowRight'])
            this.moveRight();
        
    }
    moveLeft(){
        if(math.abs(this.speed)>0){
        switch(this.gear){
            case 1: this.steer_angle-=2;break;
            case -1: this.steer_angle+=2;break;
        }}}
    moveRight(){
        
        if(math.abs(this.speed)>0){
           switch(this.gear){
           case 1: this.steer_angle+=2; break;
           case -1: this.steer_angle-=2; break;
    }}}
    moveOn(){
        this.speed+=this.acceleration;
        if (this.speed>=this.maxspeed) this.speed=this.maxspeed;
        this.gear = 1;
       
    }
    moveBack(){
        this.speed-=this.acceleration;
        if (this.speed<=-this.maxspeed) this.speed=-this.maxspeed;
        this.gear = -1;
    }
    setCarDirection(){
        let angle = this.steer_angle;
   
        let a = math.cos(math.unit(angle, 'deg'))*this.gear;
        let b = math.sin(math.unit(angle, 'deg'));
        if(this.gear < 0){
            a *= -1;
            //b *= -1;
        }
        else{
            //this.steer_angle *= -1;
            //speed *= -1;
        }
            
        this.car_direction = new Vector2D(a, b);
    }
 
    getCenter(){
        return new Vector2D(this.position.X + this.size.X/2, this.position.Y + this.size.Y/2)
    }

    decelerate(){
     if (this.speed>0){
        this.speed-=this.friction;
     }
     else if(this.speed<0){
        this.speed+=this.friction;
     }
    if(math.abs(this.speed)<=this.friction)
        this.speed=0;
    }
}