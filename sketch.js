
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper , dustbin1,dustbin2,dustbin3,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground (400,680,800,20);
	paper = new Paper (100,670,20);
	dustbin1 = new Dustbin (490,620,20,100);
	dustbin2 = new Dustbin (550,660,100,20);
	dustbin3 = new Dustbin (610,620,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
 
}

function keyPressed(){
Matter.Body.applyForce(paper.body,paper.body.position,{x:13,y:-15});
}

