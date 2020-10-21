var fixed,moving;

function setup() {
  createCanvas(800,400);

  fixed=createSprite(200, 200, 50, 50);
  fixed.shapeColor="blue";

  moving=createSprite(400, 200, 50, 50);
  moving.shapeColor="yellow";

}

function draw() {
  background("black");  
moving.x=World.mouseX;
moving.y=World.mouseY;

if (fixed.x-moving.x<fixed.width/2+moving.width/2
  && moving.x-fixed.x<fixed.width/2+moving.width/2
  && fixed.y-moving.y<fixed.height/2+moving.height/2
  && moving.y-fixed.y<fixed.height/2+moving.height/2
  ) {
fixed.shapeColor="green";
moving.shapeColor="green";
  }
else 
{
  fixed.shapeColor="blue";
  moving.shapeColor="yellow";
}


  drawSprites();
}