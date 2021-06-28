const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world , thunderFrame
var drops = []
var maxDrops = 100 ;
var manimage , thunder1 ,man  , thunder2,thunder3,thunder4
var thunder
function preload(){
   thunder1 = loadImage("thunderbolt/1.png")
   thunder2 = loadImage("thunderbolt/2.png")
   thunder3 = loadImage("thunderbolt/3.png")
   thunder4 = loadImage("thunderbolt/4.png")

}


function setup(){
   createCanvas(500 , 600 )

engine = Engine.create();
world= engine.world;

man = new Man (200,500)

for( var i = 0 ; i<maxDrops ; i++){
    drops.push(new Drops (random(0,500),random(0,700)))

}
}
    


function draw(){
   background (0) ;
Engine.update(engine);
thunders();
   for( var i = 0 ; i<maxDrops ; i++){
       drops[i].display();
   }
drawSprites();

man.display()
}
function thunders() {
   if(frameCount%80 ===0){
   thunder = createSprite(100,100,100,100)
  thunderFrame = frameCount
   var ran = Math.round(random(1,4))
   switch(ran){
   case 1 :  thunder.addImage(thunder1);
   break;
   case 2 :  thunder.addImage(thunder2);
   break;
   case 3 :  thunder.addImage(thunder3);
   break;
   case 4 :  thunder.addImage(thunder4);
   break;

   }
   }
   if(thunderFrame+10 === frameCount && thunder){
      thunder.destroy()
   }
   
}