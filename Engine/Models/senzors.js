class Senzor extends CollidableSprite {

    constructor(sensorManager,color, game, position, senzor_length, angle, offset){
        super(position, 'line', senzor_length, angle, offset);

        this.color = color
        this.collidedObjName="none"
        this.gameObject = game;
        this.intersaction = 0;
        this.sensorManager=sensorManager;
    }

    setCollider(){
        this.setPoints();
        this.setEdges();
    }

    setPoints(){
        this.points = [
            new Vector2D(this.position.X, this.position.Y),
            Vector2D.add(new Vector2D(this.position.X, this.position.Y), this.offset)//this.second_point,
        ];

        var matrix = Matrix.getRotationMatrix(this.angle - 360);
        var center = new Vector2D(this.position.X, this.position.Y);
        for(var i = 0; i < this.points.length; i++){
            this.points[i].subtract(center);
            var vector = Vector2D.transpose(this.points[i]);
            var vector_d = math.multiply(matrix, vector);
            this.points[i] = new Vector2D(vector_d[0][0], vector_d[1][0]);
            this.points[i].add(center);
        }
    }

    setEdges(){
        this.edges = [];
        this.edges[0] = Vector2D.subtract(this.points[1], this.points[0]);
    }

    update(position, angle){
        this.position = position;
        this.angle = angle;
    }

    draw(){
        stroke(this.color);
        line(this.points[0].X, this.points[0].Y, this.points[1].X, this.points[1].Y);
    }

    checkCollision(){
        this.collidedObjName="none"
        this.collided = false;
        this.intersaction = 0;
        this.color="green"
        super.setCollider()

        this.checkCollisionWithOne(this.gameObject.WallManager.wallsArray); //za zide
        this.checkCollisionWithOne(this.gameObject.ParkingspotManager.parkingspotsArray); //za parking spote
    }

    checkCollisionWithOne(colliders){
        var len=colliders.length;
        for(var i=0; i<len;i++){
        	colliders[i].collision(this)

        }
    }

    collisionEvent(withObj, intersaction){
        this.collided = true;
        this.collidedObjName=withObj.objName
        if(withObj.objName=="parkingspot"){
            this.intersaction = intersaction;
            this.color = 'red';
            this.sensorManager.objType=0;
        }
        else  if(withObj.objName == "wall"){
            this.intersaction = intersaction;
            this.color = 'red';
            this.sensorManager.objType=1;
        }
            
    }

}

class Senzors {
    constructor(game, car, position, senzor_length, angle){
        this.gameObject = game;
        this.car = car;
        this.position = position;
        this.senzor_length = senzor_length;
        this.angle = angle;
        this.objType=0;
        this.array = [
            new Senzor(this,'green', game, position, senzor_length, angle, new Vector2D(senzor_length, 0)),
            new Senzor(this,'green', game, position, senzor_length/2, angle, new Vector2D(-senzor_length/2, 0)),
            new Senzor(this,'green', game, position, senzor_length/2, angle, new Vector2D(senzor_length/2, senzor_length/2)),
            new Senzor(this,'green', game, position, senzor_length/2, angle, new Vector2D(senzor_length/2, -senzor_length/2)),
            new Senzor(this,'green', game, position, senzor_length/2, angle, new Vector2D(-senzor_length/2, senzor_length/2)),
            new Senzor(this,'green', game, position, senzor_length/2, angle, new Vector2D(-senzor_length/2, -senzor_length/2)),
            new Senzor(this,'green', game, position, senzor_length/2, angle, new Vector2D(0, senzor_length/2)),
            new Senzor(this,'green', game, position, senzor_length/2, angle, new Vector2D(0, -senzor_length/2)),
        ];

        this.inter_array = [[0,"none"], [0,"none"], [0,"none"], [0,"none"], [0,"none"], [0,"none"], [0,"none"], [0,"none"]];
    }

    update(position, angle){
        // update all senzors
        var len=this.array.length;
        for(var i=0;i<len;i++){
        	this.array[i].update(position,angle)
        }
    }

    draw(){
             var len=this.array.length;
        for(var i=0;i<len;i++){
        	this.array[i].draw()
        }
    }

    checkCollision(){
        var len=this.array.length;
        for(var i=0;i<len;i++){
        	this.array[i].checkCollision()
        }

        this.array.map((senzor, i) => {this.inter_array[i][0] = senzor.intersaction / 1000;this.inter_array[i][1]=senzor.collidedObjName});
    }
    getSum(){
        var sum=0;
        for(var i of this.inter_array){
            sum+=i[0]
        }
        return sum;

    }

}