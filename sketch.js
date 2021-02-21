const Engine = Matter.Engine;
const World = Matter.World;
const Bpdies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;

function preload(){

}

function setup(){
     var canvas = createCanvas(500,500);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(100,100,100,100);

}

function draw(){
    background("white");
    Engine.update(engine);
ground.display();
}
