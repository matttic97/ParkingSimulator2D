class CollidableSprite{

    constructor(position, poligon){
        this.position = position;
        this.poligon = poligon;
    }

    draw(){

    }

    update(){

    }

    collision(collider){
        let type = this.poligon + '-' + collider.poligon;
        switch(type){
            case 'circle-rect' :    return Collider.Collision_Circle_vs_Rect(this. collider); break;
            case 'rect-circle' :    return Collider.Collision_Circle_vs_Rect(this. collider); break;
            case 'rect-rect' :      return Collider.Collision_Rect_vs_Rect(this, collider); break;
            default : return true;
        }
    }

}