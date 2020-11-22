var ball1,ball2,ball3,ball4,ball5, roof1,rope1,rope4
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ball1=new Balls(200,400,20);
	 ball2=new Balls(300,400,20);
	 ball3=new Balls(400,400,20);
	 ball4=new Balls(500,400,20);
	 ball5=new Balls(600,400,20);
	roof1=new Roof(400,200,500,40);
	rope1=new Rope(ball1.body,roof1.body)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
roof1.display();
rope1.display();

}



