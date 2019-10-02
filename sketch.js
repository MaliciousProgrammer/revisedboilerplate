var fr,mr,fr1,fr2,sp1,sp2;

function setup() {
  createCanvas(800,400);
fr = createSprite(200, 200, 50, 120);
mr = createSprite(300,200,80,50);
fr.shapeColor = "cyan";
mr.shapeColor = "red";
fr1  = createSprite(700,200,50,50);
fr2  = createSprite(500,300,50,50);
fr1.shapeColor = "cyan";
fr2.shapeColor = "red";
sp1  = createSprite(700,200,50,50);
sp2  = createSprite(400,200,50,50);
sp1.velocityX = -5;
sp2.velocityX = 1;
}

function draw() {
  background(255,255,255);
  mr.x = World.mouseX;
  mr.y = World.mouseY;
  bounceOf(sp1,sp2);
if(isTouching(mr,fr1)) {
  fr1.shapeColor = "yellow";
  mr.shapeColor = "blue";
}
else {
  fr1.shapeColor = "cyan";
  mr.shapeColor = "red";
}

if(isTouching(mr,fr2)) {
  fr2.shapeColor = "yellow";
  mr.shapeColor = "blue";
}
else {
  fr2.shapeColor = "red";
  mr.shapeColor = (0,76,87);
}

  drawSprites();
}
