class Car extends CollidableSprite {

    constructor(gameObject,position, angle, drivable){
        super(position, 'rect', new Vector2D(100, 50), angle);
        this.objName="car"
        this.drivable = drivable;

        this.angle_power = 0;
        this.angle_max_power = 1.6;
        this.velocity = Vector2D.zeros();
        this.car_direction = Vector2D.zeros();
        this.gear = 0;  // -1=reverse, 0=neutral, 1=forward
        this.acceleration = 0.1
        this.friction = 0.03
        this.brakeFriction=0.6;
        this.speed = 0;
        this.maxspeed = 5;
        
        // for testing ->
        this.color = 'red';
        this.gameObject=gameObject
    }

    

    draw() {
        push();
        fill(this.color);
        stroke('black');   
        translate(this.position.X, this.position.Y);
        rotate(this.angle)
        rect(0,0, this.size.X, this.size.Y);
        noFill();
        pop();
    }

    update(keys){
        if(!this.drivable)
            return;

        this.adjustSteerPower();
        this.move(keys);
        this.setCarDirection();  
        this.velocity = new Vector2D(this.car_direction.X, this.car_direction.Y);
        this.position.add(this.velocity);
        this.color = 'red';
        this.checkCollision();      

    }

    move(keys){   
        if(keys['Spacebar']){
        this.brake()
        }
        else{
        if(keys['ArrowDown'])
            this.moveBack();
        else if(keys['ArrowUp'])
            this.moveOn();
        else 
            this.decelerate();
        }
        if(keys['ArrowLeft'])
            this.moveLeft();
        else if(keys['ArrowRight'])
            this.moveRight();
    }
    moveLeft(){
        if(math.abs(this.speed) > 0){
            switch(this.gear){
                case 1: this.angle-=this.angle_power; break;
                case -1: this.angle+=this.angle_power; break;
            }
        }
    }
    moveRight(){
        if(math.abs(this.speed) > 0){
            switch(this.gear){
                case 1: this.angle+=this.angle_power; break;
                case -1: this.angle-=this.angle_power; break;
            }
        }
    }
    moveOn(){
        this.speed += this.acceleration;
        if (this.speed >= this.maxspeed) this.speed = this.maxspeed;
        this.gear = 1;
    }
    moveBack(){
        this.speed -= this.acceleration;
        if (this.speed <= -this.maxspeed) this.speed = -this.maxspeed;
        this.gear = -1;
    }
    
    setCarDirection(){
        let a = math.cos(math.unit(this.angle, 'deg')) * this.gear * this.speed;
        let b = math.sin(math.unit(this.angle, 'deg')) * this.speed;
        if(this.gear < 0)  a *= -1;

        this.car_direction = new Vector2D(a, b);
    }

    decelerate(){
        if (this.speed > 0)
            this.speed -= this.friction;
        else if(this.speed<0)
            this.speed += this.friction;

        if(math.abs(this.speed) <= this.friction)
            this.speed = 0;
    }

    brake(){
        if (this.speed > 0){
            this.speed -= this.brakeFriction;
                 }
         else if(this.speed<0){
            this.speed += this.brakeFriction;
         }
        if(math.abs(this.speed) <= this.friction)
            this.speed = 0;
    }

    adjustSteerPower(){
        this.angle_power = this.angle_max_power * (1 - math.exp(-5 * math.abs(this.speed) / this.maxspeed));
    }


    checkCollision(){
    super.setCollider()

    this.checkCollisionWithOne(this.gameObject.WallManager.wallsArray);
    this.checkCollisionWithOne(this.gameObject.CarManager.carsArray);
    this.checkCollisionWithOne(this.gameObject.ParkingspotManager.parkingspotsArray);

    }



    checkCollisionWithOne(colliders){
        colliders.map( (collider) => this.collision(collider));
    }

    collisionEvent(withObj){
        this.color="white"
        this.speed=-(this.speed)/abs(this.speed)*4
        console.log(withObj.objName)


    }

    stop(){
        this.velocity = Vector2D.zeros();
    }

}