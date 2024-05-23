function setup() {
  createCanvas(800, 500);
  background("violet");
}

function draw() {
  stroke("white");
  fill("blue");
  if(mouseIsPressed){
    rect(mouseX, mouseY, 30, 50)
  }
}
