let grid = undefined;
//let stroke1 = prompt("enter a basic color name in lower case", "gray")
//let stroke2 = prompt("enter another basic color name in lower case", "purple")

let town = ('Welcome to ' + prompt("Where does the snowcreature live?", "Snowtopia"))

let hatColor = prompt("What color hat does the snowcreature have? Write in lower case.", "blue")

let snowflakes = [];

function setup() {
    createCanvas(1000, 800)
    noStroke();
    fill(240);
    grid = loadImage("img/100px_grid.png")
  }
  
  function draw() {
    background("#ABBBC0")

    //mountain
    fill("#C3D3D8")
    noStroke()
    triangle(100, 800, 1300, 800, 650, 75);

    //mountain 2
    fill("#D3DFE3")
    noStroke()
    triangle(-200, 800, 800, 800, 300, 350);

    //sign
    fill("#6E4E40")
    stroke("#4F2F23")
    strokeWeight(10)
    rect(100, 400, 300, 200)
    //sign line
    line(250, 600, 250, 800)
    //sign words
    fill("#BB8975")
    noStroke()
    textSize(32)
    textFont('Georgia')
    textAlign(CENTER)
    text(town, 100, 450, 300, 200)

    //snowman arms
    stroke("#4F2F23")
    strokeWeight(10)
    line(450, 200, 700, 400)
    line(750, 300, 950, 500)
    //snowman bottom
    fill("#fff")
    stroke("#f1f1f1")
    strokeWeight(10)
    ellipse(700, 600, 400)
    //snowman middle
    ellipse(700, 350, 250)
    //snowman top
    ellipse(700, 200, 150)
    //snowman eyes
    stroke(0)
    strokeWeight(20)
    point(675, 200)
    point(725, 200)
    //smile
    noFill()
    strokeWeight(10)
    arc(700, 225, 50, 50, 0, PI)

    //hat
    fill(hatColor)
    stroke(hatColor)
    strokeWeight(10)
    arc(700, 155, 130, 120, -PI, 0, CHORD)
    //hat fuzz
    star(700, 90, 9, 10, 50)
    //hat fold
    strokeWeight(30)
    line(630, 165, 770, 165)
  }

  function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }