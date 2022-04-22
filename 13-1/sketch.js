let pos;
let inc;
let pos2;
let inc2;

function setup() {
  createCanvas(700, 700);
  
  angleMode(DEGREES);
  slider = createSlider(10, 600, 0);
  slider.position(10, 10);
  slider.style('width', '100px');

  pos = 0.0;
  inc = 2.0;

  pos2 = 0.0;
  inc2 = 1.0;
}

function draw() {
  background(38, 43, 88);

  for (let i = 0; i < 5; i++) { // stars
    noStroke();
    fill(250, 250, 250, random(90,100));  
    ellipse(random(0,800), random(0,800), 5 - i, 5 - i)
  }  
  translate(width/2, height/2);

  let mySinVal = sin(pos);
  let mySinVal2 = sin(pos2);

  amplified = mySinVal * 50;
  amplified2 = mySinVal2 * slider.value();

  stroke(10, 10, 10);
  fill(10, 10, 10, 60);

  for (let i = 0; i < 10; i++) { // bird
    curve(480 * i, -380 * i, -300, amplified * i, 230, amplified2, 280 * i, -280 * i);
  }  
  
  pos = pos + inc;
  pos2 = pos2 + inc2;
}
