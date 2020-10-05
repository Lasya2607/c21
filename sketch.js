var fixedRect;
var movingRect;
var ball;
var bat;
var square;

function setup() {
  createCanvas(800,400);
 fixedRect =  createSprite(400, 200, 50, 50);
 movingRect = createSprite(600,200,50,50);
 ball = createSprite(700,200,40,40);
 bat = createSprite(500,300,60,60);
 square = createSprite(450,400,70,70)
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  ball.shapeColor = "pink";
  bat.shapecolor = "blue";
  square.shapeColor = "yellow";

}

function draw() {
  background(255,255,255);  
 movingRect.x = World.mouseX;
 movingRect.y = World.mouseY;
 

if(isTouching(ball,movingRect)) {
movingRect.shapeColor = "red";
ball.shapeColor = "red";
}  
else {
  movingRect.shapeColor = "green";
  ball.shapeColor = "green";
}
  drawSprites();
}

function isTouching(object1,object2) {
  if(object1.x - object2.x < object1.width/2 + object2.width/2 && object2.x - object1.x < object1.width/2 + object2.width/2 && object2.y - object1.y < object1.height/2 + object2.height/2 && object1.y - object2.y < object1.height/2 + object2.height/2) {
   return true;
  }
else{
  return false;
}
}