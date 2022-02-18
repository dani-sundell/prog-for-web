let bubbles = [];

function setup() {
    createCanvas(500, 500);
    for(let i = 0; i < 30; i++){
        bubbles[i] = new Bubble();     
    }
}

function draw() {
    background(69, 106, 168);
    for(let i = 0; i < 30; i++){
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    constructor(){
     this.x = random(20, 500);
     this.y = random(20, 500);
     this.bubbleColors = ['SteelBlue', 'CadetBlue', 'CornflowerBlue', 'LightSteelBlue', 'DodgerBlue', 'PowderBlue', 'LightCyan', 'MediumAquamarine'];
     this.bubbleColor = random(this.bubbleColors);
     this.bubbleSize = random(20, 100);
    }
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
    show() {
        stroke(this.bubbleColor);
        strokeWeight(5);
        noFill();
        ellipse(this.x, this.y, this.bubbleSize, this.bubbleSize);
    }
}

