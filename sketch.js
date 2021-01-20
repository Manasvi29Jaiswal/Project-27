
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(320,500,40)
	bob2 = new Bob(360,500,40)
	bob3 = new Bob(400,500,40)
	bob4 = new Bob(440,500,40)
	bob5 = new Bob(480,500,40)
	roof = new Roof (400,300);
	rope1 = new Rope(roof.body,bob1.body,bob1.diameter*2,0);
	rope2 = new Rope(roof.body,bob2.body,bob2.diameter*2,0);
	rope3 = new Rope(roof.body,bob3.body,bob3.diameter*2,0);
	rope4 = new Rope(roof.body,bob4.body,bob4.diameter*2,0);
	rope5 = new Rope(roof.body,bob5.body,bob5.diameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("chartreuse");

  roof.display();
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  
  drawSprites();
 
}



