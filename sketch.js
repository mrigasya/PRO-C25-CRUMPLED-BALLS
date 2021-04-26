
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj,groundObject	
var paperObj
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObj= new Paper(300,650,50);

	Engine.run(engine);
  
}


function draw() {
  imageMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObj.display();
  drawSprites();

}
function keyPressed(){
	if(keyCode== UP_ARROW){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{
			x:50, y:-50,
	})
	}
}
