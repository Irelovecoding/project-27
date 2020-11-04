
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 
var bob1,bob2,bob3,bob4,bob5;
var stringrope1,stringrope2,stringrope3,stringrope4,stringrope5;
var world;
var engine;

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;
bob1 = new Bobball(400,400,25)
stringrope1 = new Stringrope(bob1.ballbody,{x:400,y:100});
bob2 = new Bobball(450,400,25)
stringrope2 = new Stringrope(bob2.ballbody,{x:450,y:100});
bob3 = new Bobball(500,400,25)
stringrope3 = new Stringrope(bob3.ballbody,{x:500,y:100});
bob4 = new Bobball(550,400,25)
stringrope4 = new Stringrope(bob4.ballbody,{x:550,y:100});
bob5 = new Bobball(600,400,25)
stringrope5 = new Stringrope(bob5.ballbody,{x:600,y:100});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  bob1.display();
stringrope1.display();
  bob2.display();
  stringrope2.display();
  bob3.display();
  stringrope3.display();
  bob4.display();
  stringrope4.display();
  bob5.display();
  stringrope5.display();

rect(450,100,400,50);

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.ballbody,bob1.ballbody.position,{x:-50,y:-50});



	}


}



