let rectX = 0;
let rectY;
const rectHeight = 75;
const rectWidth = 75;
let clickCount = 0;
let speed;

function setup() {
    createCanvas(500, 500);
    rectY = random(height - rectHeight);
    speed = random(1, 3);
}

function draw() {
    background('SlateBlue');
    drawShape();
    rectX += speed;
    textSize(18);
    fill('Moccasin');
    text('Click the box as many times as you can.', 80, 50);
    if(rectX > width) {
        noLoop();
        fill('Moccasin');
        text('Your score was ' + clickCount, 175, 400);
    }
}

function mousePressed() {
    if((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++; 
        console.log('hit', clickCount);
    }
}

function drawShape() {
    fill('LightCyan')
    rect(rectX, rectY, rectWidth, rectHeight);
}