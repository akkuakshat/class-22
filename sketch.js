
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ball,ground;



function setup(){
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

 var ball_option={
   restitution:1.5
 }
ball=Bodies.circle(200,100,50,ball_option);

var ground_option={
  isStatic:true
}
ground=Bodies.rectangle(200,390,400,20,ground_option);
World.add(world,ground);
World.add(world,ball);


}

function draw() {
  background("yellow"); 
  Engine.update(engine); 
  rectMode(CENTER);
  ellipseMode(RADIUS);
rect(ground.position.x,ground.position.y,400,20);
ellipse(ball.position.x,ball.position.y,50,50);
  drawSprites();
}