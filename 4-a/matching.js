let fontCottonwood;
let scoreTally = 0;
let firstX = 75;
let firstY = 75;
let myCards = [];
let startingId = 0;
let shootSound;

function preload() {
    fontCottonwood = loadFont('fonts/cottonwood.otf');
    shootSound = loadSound('sounds/shootin.mp3');
}

function setup() {
    let cnv = createCanvas(850, 850);
    cnv.mousePressed(canvasPressed);
    background('Peru');
    for(let k = 0; k < 4; k++){
        for(let i = 0; i < 4; i++) {
            rect(firstX, firstY, 150, 150);
            myCards.push({ x: firstX, y: firstY, id: startingId});
            firstX += 182.5;
            startingId++;
        }
        firstX = 75;
        firstY += 175;
    }
}

function title() {
    fill('PapayaWhip');
    textSize(36);
    textAlign(CENTER);
    textFont(fontCottonwood);
    text('Rootin\' Tootin\' Match n\' Shoot Em\' ', 425, 50);
}

function score() {
    fill('MidnightBlue');
    textSize(30);
    textAlign(CENTER);
    textFont(fontCottonwood);
    text('Matches: ' + scoreTally + '/8', 425, 810);
}

function draw() {
    cursor('images/cursor-01.png');
    title();
    score();
}

function canvasPressed() {
    shootSound.play();
    shootSound.setVolume(.2);
  }