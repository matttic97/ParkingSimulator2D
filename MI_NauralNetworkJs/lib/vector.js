class Vector2D{
    constructor(X, Y){
        this.X = X;
        this.Y = Y;
    }

    static zeros(){
        return new Vector2D(0, 0);
    }
    static ones(){
        return new Vector2D(1, 1);
    }

    add(vector){
        this.X += vector.X;
        this.Y += vector.Y;
    }

    devide(n){
        this.X /= n;
        this.Y /= n;
    }
}