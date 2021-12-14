
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
		isStatic: false,
		restitution: 0.3,
		friction: 0,
        density: 1.2
	}

    var ground_options ={
	    isStatic: true
	}


		
		ball = Bodies.circle(100,190,20,ball_options);
		World.add(world,ball);

		ground = Bodies.rectangle(400,700,800,40,ground_options);
		World.add(world,ground);

        wall1 = Bodies.rectangle(620,665,5,45,ground_options);
       	World.add(world,wall1);
 
		wall2 = Bodies.rectangle(690,665,5,45,ground_options);
        World.add(world,wall2);










	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);












  ellipse(ball.position.x,ball.position.y,20)
  rect(ground.position.x,ground.position.y,800,40);
  rect(wall1.position.x,wall1.position.y,5,45);
  rect(wall2.position.x,wall2.position.y,5,45);
  drawSprites();
}

function hForce (){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:41,y:0});
   
   }
   
   
   function vForce (){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-41});
   
   }

