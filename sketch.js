
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground
var wall1
var wall2

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	key = createImg('push.png');
	key.position(220,30);
	key.size(50,50);
	key.mouseClicked (hForce,vForce)

	var ball_options = {
		restitution: 0.95
		
	}

    var ground_options ={
	    isStatic: true
	}


		
		ball = Bodies.circle(100,190,20,ball_options);
		World.add(world,ball);

		ground = Bodies.rectangle(400,700,800,40,ground_options);
		World.add(world,ground);

        wall1 = Bodies.rectangle(750,665,5,35,ground_options);
       	World.add(world,wall1);
 
		wall2 = Bodies.rectangle(780,665,5,35,ground_options);
        World.add(world,wall2);










	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);












  ellipse(ball.position.x,ball.position.y,20)
  rect(ground.position.x,ground.position.y,800,40);
  rect(wall1.position.x,wall1.position.y,5,35);
  rect(wall2.position.x,wall2.position.y,5,35);
  drawSprites();
}

function hForce (){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
   
   }
   
   
   function vForce (){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
   
   }

