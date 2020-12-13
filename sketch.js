
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbin1, ground1, paper1;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new dustbin(1200,650);
	ground1 = new Ground(200,450,40);
	paper1 = new paper(width/2,670,width,20);

	var render = Render.create(
		{
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
			height: 700,
			wireframes: false
		}
	});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin1.display();
  ground1.display();
  paper1.display();

 //drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		
		Matter.Body.applyForce(paperObject.body.position, {x:85, y: -85});
	}
}


