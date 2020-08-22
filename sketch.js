const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var mango1,mango2,mango3,tree,ground;
var backgroundImg;
var rock, slingShot;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    mango1 = new Mango(700,320,70,70);
    mango2 = new Mango(920,320,70,70);
    mango3 = new Mango(1140,320,70,70);

    rock = new Rock(100,100);
    slingshot= new Slingshot(rock.body,{x:200,y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    mango1.display();
    mango2.display();
    ground.display();
    mango3.display();
    rock.display();
    slingshot.display();   

    detectCollision(mango1,rock);
    detectCollision(mango2,rock);
    detectCollision(mango3,rock);
}

function detectCollision(lrock,lmango){
mangoBodyPosition=lmango.body.position
rockBodyPosition=lrock.body.position

var distance=dist(rockBodyPosition.x,rockBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<-lmango.r+lrock.r){
Matter.Body.setStatic(lmango.body,false);
}
}



function mouseDragged(){
Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
slingshot.fly();
}