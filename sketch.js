const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var bg, snowflake, boyimg,girlimg;
var snowflakes=[];

function preload(){

  bg=loadImage("snow2.jpg");
  boyimg=loadImage("boy.png");
  girlimg=loadImage("girl.png");

}

function setup() {
  createCanvas(1250,600);

  engine = Engine.create();
  world = engine.world;

  boy=createSprite(650,450,10,10);
  boy.addImage(boyimg);
  boy.scale=0.5;

  girl=createSprite(350,470,10,10);
  girl.addImage(girlimg);
  girl.scale=0.5;

  if(frameCount%150===0){
    for(var i=0; i<100; i++){
      snowflakes.push(new Snowflake(random(0,1200),random(0,1200)));

    }
  }
}

function draw() {
  background(bg);  

  Engine.update(engine);

  for(var i=0; i<100; i++){
    snowflakes[i].display();  
    snowflakes[i].updateY();
  }

  drawSprites();

  
}