
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, wall, rock

let engine;
let world;

function setup()
{
  createCanvas(400,400);
  engine= Engine.create()
  world= engine.world

  ball_options={
    restitution:0.5, 
    
  }
  ball=Bodies.circle(100,100,10, ball_options)
  World.add(world, ball)

  ground_options={
    isStatic:true
  }
  ground= Bodies.rectangle(0,390,400,5, ground_options)
  World.add(world, ground)

  wall= Bodies.rectangle(200,200,200,5, ground_options)
  World.add(world, wall)

  rock= Bodies.circle(300,50,20, ball_options)
  World.add(world,rock)
}

function draw() 
{
  background("grey");
  Engine.update(engine)

  ellipse(ball.position.x, ball.position.y,20, 20)

  fill("green")
  rect(ground.position.x, ground.position.y, 400,20)

  rect(wall.position.x, wall.position.y, 200, 10)
 
  ellipse(rock.position.x, rock.position.y,20, 20)
}

