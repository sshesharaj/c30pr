
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof1=new roof()
bob1 = new bobs(300,300,25)
bob2 = new bobs(350,300,25)
bob3 = new bobs(400,300,25)
bob4 = new bobs(450,300,25)
bob5 = new bobs(250,300,25)
bob6 = new bobs(200,300,25)
bob7 = new bobs(150,300,25)
rope1 = new rope(bob1.body,roof1.body,0)
rope2 = new rope(bob2.body,roof1.body,50)
rope3 = new rope(bob3.body,roof1.body,100)
rope4 = new rope(bob4.body,roof1.body,150)
rope5 = new rope(bob5.body,roof1.body,-50)
rope6 = new rope(bob6.body,roof1.body,-100)
rope7 = new rope(bob7.body,roof1.body,-150)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0)


  drawSprites();
 roof1.display()
 bob1.display()
 bob2.display()
 bob3.display()
 bob4.display()
 bob5.display()
 bob6.display()
 bob7.display()
 rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()
 rope6.display()
 rope7.display()

}

 function  keyPressed(){ 
if(keyCode===UP_ARROW){

	Matter.Body.applyForce(bob7.body,bob7.body.position,{x:45,y:-45})
}



}

