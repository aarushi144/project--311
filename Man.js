class Man {
    
constructor(x,y){
  var  option={
        isStatic : true
    }
this.body = Bodies.rectangle(x,y,60,60,option)
World.add(world,this.body)

this.manimage = loadImage ("Walking Frame/walking_1.png")
}
display(){
   imageMode(CENTER)
image( this.manimage,this.body.position.x , this.body.position.y,300,300)

}
}


