
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5
var rope1, rope2, rope3, rope4, rope5
var roof1

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof1=new Roof(400,200,300,20)

	bob1=new Bob(400,400,25)
	bob2=new Bob(350,400,25)
	bob3=new Bob(300,400,25)
	bob4=new Bob(450,400,25)
	bob5=new Bob(500,400,25)

  rope1=new Rope(bob1.body,roof1.body,0,0)
  rope2=new Rope(bob2.body,roof1.body,-50,0)
  rope3=new Rope(bob3.body,roof1.body,-100,0)
  rope4=new Rope(bob4.body,roof1.body,50,0)
  rope5=new Rope(bob5.body,roof1.body,100,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  
  roof1.display()

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  drawSprites();
 
}

function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-50,y:-50})
  }
}

