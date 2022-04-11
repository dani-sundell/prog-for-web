let x;
let y;

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    cnv.position(x, y);
}

//center canvas method source: https://github.com/processing/p5.js/wiki/Positioning-your-canvas

function setup() {
    cnv = createCanvas(800, 800);
    centerCanvas();
    background(0);
    noLoop();
}

function draw() {
    r = random(10, 100);
    g = random(10, 100);
    b = random(10, 255);
    translate(width / 2, height / 2);
    scale(0.35);
    for (let i = 0; i < 4; i++) {
        for (let i = 0; i < 400; i++) {
            let r = random(0, 400);
            stroke(r, g, b);
            strokeWeight(1);
            noFill();
            square(i + r, i - r + 100, i - r);
            rotate(PI / 5.0);
        }
    }
}
