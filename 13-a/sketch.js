const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  // gradient background
  let colorShift = round(map(mouseX, 0, width, 0, 81));
  bg1 = color(30, 27, colorShift);
  bg2 = color(117, 113, 211);
  setGradient(0, 0, width, height, c1, c2, Y_AXIS);

  // draw sky
  sky();

  //initiate rotate sky
  if (mouseIsPressed) {
    angle =  mouseX * .19; //sets mouse drag velocity
  } else {
    angle += .025; //sets sky rotation rate
  }
  
}

function starsMoon() { //create star cluster and moon
  randomSeed(300);
  translate(-width * 2, -height * 2);
  noStroke();
  fill(255);
  for (let i = 0; i < 300; i++) { // stars
      ellipse(random(0,width * 4) + i, random(0,height * 4) + i, 2, 2);
  }
  fill(255);
  ellipse(width * 1.25, height * 2, 100, 100); // moon
}

function sky(){ //rotate sky
  rotate(angle);
  starsMoon();
}

function setGradient(x, y, w, h, c1, c2, axis) { // create gradient
  noFill();

  if (axis === Y_AXIS) {
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(bg1, bg2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
}

function windowResized() { // responsive canvas
  resizeCanvas(windowWidth, windowHeight);
}
