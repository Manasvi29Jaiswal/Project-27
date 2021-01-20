class Rope{
    constructor(body1,body2,offsetX,offsetY){
        
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            //stiffness: 0.01,
            //length: 10
            pointB:{x:this.offsetX , y:this.offsetY}
        }

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    

    display(){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            push ()
            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop ();
        
    }
    
}













