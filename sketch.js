
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisons = [];
var divisonsHeight = 300;
var particles = [];
var plinkos = []; 
function preload()
{
	
}



function setup() {
	canva_schmaltzy=createCanvas(800, 700);
  
  h=canva_schmaltzy.height
  w=canva_schmaltzy.width

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  division1 = new Division(10,h/2,10,h/2);
  QX1chunkBit1= new Division(10,555,10,233.99113371);
  QX1chunkBit2= new Division(90,555,10,233.99113371);
  QX1chunkBit3= new Division(170,555,10,233.99113371);
  QX1chunkBit4= new Division(250,555,10,233.99113371);
  QX1chunkBit5= new Division(330,555,10,233.99113371);
  QX1chunkBit6= new Division(410,555,10,233.99113371);
  QX1chunkBit7= new Division(490,555,10,233.99113371);
  QX1chunkBit8= new Division(570,555,10,233.99113371);
  QX1chunkBit9= new Division(650,555,10,233.99113371);
  QX1chunkBit10= new Division(730,555,10,233.99113371);

  
	ground = new Ground(400,690,800,20);

  
  

  for (var j=75; j<=width; j = j+50) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j=50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }
  for (var j=75; j<=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }
  for (var j=77; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }

 

 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");  
  drawSprites();

  
  
  
  if (frameCount %60 === 0) {
    particles.push(new Particle(random(width/2-30, width/2+30),10,10));
  }
  
  for (var h = 0; h<particles.length; h++) {
    particles[h].display();
  }

  for (var j = 0; j<plinkos.length; j++) {
    plinkos[j].display();
  }


  ground.display();
 QX1chunkBit1.display();
 QX1chunkBit2.display();
 QX1chunkBit3.display();
 QX1chunkBit4.display();
 QX1chunkBit5.display();
 QX1chunkBit6.display();
 QX1chunkBit7.display();
 QX1chunkBit8.display();
 QX1chunkBit9.display();
 QX1chunkBit10.display();
 

 
}



