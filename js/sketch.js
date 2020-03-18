let osc, freq, amp;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  osc = new p5.Oscillator('square');
}

function draw() {
  strokeWeight(10);
  freq = map(mouseX, 0, width, 100, 1000);
  amp = map(mouseY, 0, height, 0, 1);
  if (mouseIsPressed) {
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

function mousePressed() {
  osc.start();
  stroke(random(0, 255), random(0, 255), random(0, 255));
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    background(0);
  }
}

function mouseReleased() {
  osc.stop();
}