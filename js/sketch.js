function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
}

function draw() {
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 30, 30);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

function mousePressed() {
  fill(random(0, 255), random(0, 255), random(0, 255));
}