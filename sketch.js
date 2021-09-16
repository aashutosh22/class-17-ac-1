var box1
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(300,300,20,20,5,2)
}

function draw() 
{
  background(220);
  box1.show()
  box1.move()
  box1.bounce()
  
}

