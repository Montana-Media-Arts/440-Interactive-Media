function setup() {
  createCanvas(600,400);
  background(255);
}

function draw() {

  if (mouseX > width/2) {
    background(0, 255, 0);
  } else {
    background(255, 0, 0);
  }
}
