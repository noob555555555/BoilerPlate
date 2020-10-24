var ball1;

var ball2;

function setup() {
  createCanvas(800,400);

  ball1 = createSprite(400, 200, 10,10)
  ball1.velocityX = -4
  ball2 = createSprite(200, 200, 20, 20)
  ball2.velocityX = 4
}

function draw() {
  background(0);
  
  //ball2.y = mouseY
  //ball2.x = mouseX

  if (ball2.x - ball1.x <= ball2.width /2 + ball1.width /2 && ball1.x - ball2.x <= ball1.width /2 + ball1.width /2){
    ball1.velocityX = ball1.velocityX * (-1)
    ball2.velocityX = ball2.velocityX * (-1)
  }


  if (ball2.y - ball1.y <= ball2.height /2 + ball1.height /2 && ball1.y - ball2.y <= ball2.height /2 + ball1.height/2){
    ball1.velocityY = ball1.velocityY * (-1)
    ball2.velocityY = ball2.velocityY * (-1)
  }

  drawSprites();
}