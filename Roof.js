class Roof {
    constructor(x,y){
        var options = {
            isStatic:true
        }

        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width=280;
        this.height=20;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push()
        rectMode(CENTER);
        //noStroke();
        rect(pos.x,pos.y,this.width,this.height);
        pop();

    }
}