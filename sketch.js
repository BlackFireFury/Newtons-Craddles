
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;
var roof, balldiameter;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	balldiameter = 40;

	ball1 = new Ball(640,300,40);
	ball2 = new Ball(720,300,40);
	ball3 = new Ball(800,300,40);
	ball4 = new Ball(880,300,40);
	ball5 = new Ball(960,300,40);

	roof = new Roof(800,100,400,20);

	rope1 = new Rope(ball1.body,roof.body,-160,0);
	rope2 = new Rope(ball2.body,roof.body,-80,0);
	rope3 = new Rope(ball3.body,roof.body,0,0);
	rope4 = new Rope(ball4.body,roof.body,80,0);
	rope5 = new Rope(ball5.body,roof.body,160,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(160, 112, 71);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed(){
if(keyCode==UP_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.postion,{x:-50,y:-45});
}

if(keyCode==DOWN_ARROW){
	Matter.Body.applyForce(ball2.body,ball2.body.postion,{x:-50,y:-45});
}
}

