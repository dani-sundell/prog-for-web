let x;
let y;

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
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
            noFill();
            strokeWeight(1);
            quad(i + 100, 500 - i, 100 + r, 700 - r, r + 200, r + 100, r + 300, r + 300);
            rotate(PI / 10.0);
        }
    }
}
