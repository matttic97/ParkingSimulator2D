/**
 * functions for all sorts of collisions
 */

class Collider {

    static Collision_Rect_vs_Rect(a, b){
        // make projection axises from poligon with less edges
        // zaenx uzamem unijo, morm se sprobat vec nacinov
        let edges = [...new Set([...a.edges, ...b.edges])]; //a.edges.length > b.edges.length ? b.edges : a.edges;
        
        for(let i = 0; i < edges.length; i++){
            // take axis perpendicular to the current edge
            let axis = new Vector2D(-edges[i].Y, edges[i].X);
            axis.normalize();

            // project points from both poligons on axis 
            let projectionA = Collider.pointProjection(a.points, axis);
            let projectionB = Collider.pointProjection(b.points, axis);

            // check if there is no intersaction
            if(!Collider.checkIntersaction(projectionA, projectionB)){
                return;
            }
        }
        Collider.collisonDetected(a,b)
    }

    static pointProjection(points, axis){
        let min = Infinity;
        let max = -min;

        var product;
        for(let i = 0; i < points.length; i++){
            product = math.dot(points[i].Array, axis.Array);

            if(product < min)
                min = product;
            if(product > max)
                max = product;
        }

        return {min: min, max: max};
    }

    static checkIntersaction(a, b){
        if(a.min < b.min)
            return (a.max - b.min >= 0)
        
        return (b.max - a.min >= 0)
    }

    static Collision_Circle_vs_Rect(a, b){

        return false;
    }



    static collisonDetected(a,b){

             if (typeof a.collisionEvent === 'function')
        {
            a.collisionEvent(b);
        }
        
             if (typeof b.collisionEvent === 'function')
        {
            b.collisionEvent(a);
        }
    }
}
