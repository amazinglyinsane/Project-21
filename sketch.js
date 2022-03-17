
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var groundObj;
var leftSide;

function preload()
{
  
}

function setup() {
	createCanvas(1500, 1000);

	engine = Engine.create();
	world = engine.world;

	var ball_options={

		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.

	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);
	ellipseMode(RADIUS);

	groundObj=new Ground (width/2, 670, width,20)
	leftSide=new Ground(1100, 600, 20,120)
	rightSide=new Ground(900, 600, 20,120)

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 20)

  groundObj.show()
  leftSide.show()
  rightSide.show()
  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball, {x:0,y:0}, {x:85,y:-85})
}

}

