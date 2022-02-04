function setup() {
    createCanvas(600,600);
    angleMode(DEGREES);
}

function createTile(originX, originY, bgColor, secondaryColor, centerStarColor, topStarColor, bottomStarColor, accentCirclesColor) {
    translate(originX, originY);
    fill(bgColor);
    rect(0, 0, 200, 200);
    noFill();
    stroke(secondaryColor);
    strokeWeight(1);
    line(0, 100, 200, 100);
    line(100, 0, 100, 200);

    // star top left
    fill(secondaryColor);
    strokeWeight(1.75);
    rect(-25, -25, 100, 100);
    fill(topStarColor);
    strokeWeight(1);
    arc(-25, -25, 100, 100, 0, 90); // top left
    arc(75, -25, 100, 100, 90, 180); // top right
    arc(-25, 75, 100, 100, 270, 360); // bottom left
    arc(75, 75, 100, 100, 180, 270); // bottom right

    //circles
    fill(accentCirclesColor);
    ellipse(150, 50, 50, 50);

    // star center
    fill(bgColor);
    strokeWeight(1.75);
    rect(50, 50, 100, 100);
    fill(centerStarColor);
    strokeWeight(1);
    arc(50, 50, 100, 100, 0, 90); // top left
    arc(150, 50, 100, 100, 90, 180); // top right
    arc(50, 150, 100, 100, 270, 360); // bottom left
    arc(150, 150, 100, 100, 180, 270); // bottom right

    // star bottom right
    fill(secondaryColor);
    strokeWeight(1.75);
    rect(125, 125, 100, 100);
    fill(bottomStarColor);
    strokeWeight(1);
    arc(125, 125, 100, 100, 0, 90); // top left
    arc(225, 125, 100, 100, 90, 180); // top right
    arc(125, 225, 100, 100, 270, 360); // bottom left
    arc(225, 225, 100, 100, 180, 270); // bottom right

    //circles
    fill(accentCirclesColor);
    ellipse(50, 150, 50, 50);
    
}

function draw() {
    createTile(0, 0, 'SaddleBrown', 'Bisque', 'BurlyWood', 'sienna', 'peru', 'orange');
    createTile(0, 200, 'LightSteelBlue', 'WhiteSmoke', 'CornflowerBlue', 'LightBlue', 'RoyalBlue', 'DarkSlateBlue');
    createTile(0, 200, 'Olive', 'HoneyDew', 'DarkSlateGrey', 'DarkOliveGreen', 'DarkKhaki', 'DarkSeaGreen');
    createTile(200, -400, 'LightSteelBlue', 'WhiteSmoke', 'CornflowerBlue', 'LightBlue', 'RoyalBlue', 'DarkSlateBlue');
    createTile(0, 200, 'Olive', 'HoneyDew', 'DarkSlateGrey', 'DarkOliveGreen', 'DarkKhaki', 'DarkSeaGreen');
    createTile(0, 200, 'LightSteelBlue', 'WhiteSmoke', 'CornflowerBlue', 'LightBlue', 'RoyalBlue', 'DarkSlateBlue');
    createTile(200, -400, 'Olive', 'HoneyDew', 'DarkSlateGrey', 'DarkOliveGreen', 'DarkKhaki', 'DarkSeaGreen');
    createTile(0, 200, 'LightSteelBlue', 'WhiteSmoke', 'CornflowerBlue', 'LightBlue', 'RoyalBlue', 'DarkSlateBlue');
    createTile(0, 200, 'SaddleBrown', 'Bisque', 'BurlyWood', 'sienna', 'peru', 'orange');
}