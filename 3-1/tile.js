function setup() {
    createCanvas(200, 200);
    angleMode(DEGREES);
    noLoop();
}

function createTile() {
    translate(0, 0);
    fill('#8C8F47');
    rect(0, 0, 200, 200);
    noFill();
    stroke('#FAEEE1');
    strokeWeight(1);
    line(0, 100, 200, 100);
    line(100, 0, 100, 200);

    // star top left
    fill('#FAEEE1');
    strokeWeight(1.75);
    rect(-25, -25, 100, 100);
    fill('#E0764C');
    strokeWeight(1);
    arc(-25, -25, 100, 100, 0, 90); // top left
    arc(75, -25, 100, 100, 90, 180); // top right
    arc(-25, 75, 100, 100, 270, 360); // bottom left
    arc(75, 75, 100, 100, 180, 270); // bottom right

    //circles
    fill('#3C634C');
    ellipse(150, 50, 50, 50);

    // star center
    fill('#8C8F47');
    strokeWeight(1.75);
    rect(50, 50, 100, 100);
    fill('#69473F');
    strokeWeight(1);
    arc(50, 50, 100, 100, 0, 90); // top left
    arc(150, 50, 100, 100, 90, 180); // top right
    arc(50, 150, 100, 100, 270, 360); // bottom left
    arc(150, 150, 100, 100, 180, 270); // bottom right

    // star bottom right
    fill('#FAEEE1');
    strokeWeight(1.75);
    rect(125, 125, 100, 100);
    fill('#5c74e8');
    strokeWeight(1);
    arc(125, 125, 100, 100, 0, 90); // top left
    arc(225, 125, 100, 100, 90, 180); // top right
    arc(125, 225, 100, 100, 270, 360); // bottom left
    arc(225, 225, 100, 100, 180, 270); // bottom right

    //circles
    fill('#3C634C');
    ellipse(50, 150, 50, 50);
    
}

function draw() {
    createTile();
}