var  Engine = Matter.Engine;
 World = Matter.World;
 Bodies = Matter.Bodies;
 Body = Matter.Body;
 Constraint = Matter.Constraint;


var particles = [];
var pinkos=[];
var divisions=[];
var divisionHeight=300;
var score=0;
function setup() {
  createCanvas(480,800);
  engine= Engine.create();
  world=engine.world;
  ground=new Ground(width/2,height,width,20);

  for (var k=0; k <=width; k=k+80){
divisions.push(new Divisions(K,height-divisionHeight/2,10,divisionHeight));
  
  }
 
for (var j = 75; j <=width; j=j+50) {
   plinkos.push(new Plinko(j,75));
   } 
   for (var j = 50; j <=width-10; j=j+50) {
      plinkos.push(new Plinko(j,175));
     }
      for (var j = 75; j <=width; j=j+50) {
         plinkos.push(new Plinko(j,275));
        } 
        for (var j = 50; j <=width-10; j=j+50) { 
          plinkos.push(new Plinko(j,375));
         }





function draw() {
  background(255,255,255);
for (var i=0; i<=plinkos.length, i++) {
  
   pinkos[i].display();
}


  if (frameCount%60===0) {
  particles.push(new particle(random(width/2-10,width/2+10)));
}  

for (var j=0; j <particles.length; j++) {
 
  particles[j]. display();
}

for (var k=0; k <divisions.length;k++) {
  
  divisions[k].display();
}
  drawSprites();


}

