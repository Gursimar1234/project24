class Dustbin {
    constructor(x,y,width,height) {
        var options = {
            restitution : 0.5,
            friction : 0.3,
            isStatic:true,
            density : 0.3,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);

    }
}