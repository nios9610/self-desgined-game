function preload()    {
bg=loadImage("space image.png")
surface1=loadImage("moon surface.jpg")
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
surface=createSprite(700,350,200,100);
surface.addImage(surface1)
surface.scale=0.3
}

function draw() {
  background(bg); 
  //addImage("moon surface.jpg") 
  drawSprites()

  }