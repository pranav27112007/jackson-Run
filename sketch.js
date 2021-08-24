var pathImg,path;
var runner,runner_img;
var boundary_1,boundary_2;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runner_img = loadImage("Runner-2.png","Runner-1.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=2;

  runner = createSprite(250,300);
  runner.addAnimation("JacksonRunning",runner_img);
  runner.scale=0.05;

  boundary_1 = createSprite(360,250,5,300);
  boundary_1.visible=false;

  boundary_2 = createSprite(40,250,5,300);
  boundary_2.visible=false;

  
}

function draw() {
  
 if(gameState===PLAY){
    background(0);
    runner.x = World.mouseX;

    if(path.y > 400 ){
      path.y = height/2;
    }
    runner.collide(boundary_1);
    runner.collide(boundary_2);
  }
  drawSprites();
}
