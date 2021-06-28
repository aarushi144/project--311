class Drops {
    constructor(x,y){
        var options ={
        friction : 0.1
        }

        this.body = Bodies.circle (x,y,10,options)
        World.add(world, this.body)

    }
    display(){
        ellipseMode (RADIUS);
        fill("blue")
        ellipse (this.body.position.x , this.body.position.y, 10 ,10 )
        

    }
}
