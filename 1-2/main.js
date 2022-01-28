function setup() {
    createCanvas(windowWidth, windowHeight);
    pixelDensity(3.0);
    background(74, 27, 158);
}

const shape = window.prompt("circle or square?");
console.log(shape);

function draw() {
    if (mouseIsPressed) {
        fill(204, 244, 97);
        stroke(0);
        strokeWeight(2);
    } else {
        noFill();
        noStroke();
    }

    if (shape === "circle") {
        ellipse(mouseX, mouseY, 80, 80);
    } else {
        rect(mouseX, mouseY, 80, 80);
    }
}