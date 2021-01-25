const Engine = Matter.Engine; 
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,bolck3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,polygon;
var platform, slingShot;

function preload(){
    polygon_img=loadImage ("polygon.png");
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
    world = engine.world;
    
    //level tow
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    //level three
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    //top
    block16 = new Block(390,155,30,40);
    
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot=new Slingshot(this.polygon,{x:100,y:200});
}
function draw(){
    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);

    slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
	