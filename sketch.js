// Namespacing object of matter.js
var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;

// variables for engine world & bodies
var engine , world , ground , ball ;



function setup() {
  createCanvas(800,400);

  engine = Engine.create(); 

  world = engine.world;

  var ground_options = {
    isStatic: true
  }
  var ball_options = {
    isStatic : false ,
    friction:0  ,
    restitution:1
  }

    ground = Bodies.rectangle(400,380,800,10,ground_options);
    World.add(world,ground);

    ball = Bodies.circle(400,200,20,ball_options);
    World.add(world,ball);
  }

function draw() {
  background(255,0,0);  
// for the updating the ENGINE.
  Engine.update(engine);


  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}