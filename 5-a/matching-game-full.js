let myCard;
const DOWN = 'down';
const UP = 'up';
let firstX = 75;
let firstY = 75;
let cards = [];
let shootSound;
let yeehawSound;
const gameState = {
    totalPairs: 8,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};
let cardBack;
let cardFaceArray = [];

function preload() {
    yeehawSound = loadSound('sounds/yeehaw.mp3');
    shootSound = loadSound('sounds/shootin.mp3');
    fontCottonwood = loadFont('fonts/cottonwood.otf');
    cardBack = loadImage('images/game-card-front.png');
    cardFaceArray = [ 
        loadImage('images/game-card-archery.png'),
        loadImage('images/game-card-banjo.png'),
        loadImage('images/game-card-cactus.png'),
        loadImage('images/game-card-cowboy.png'),
        loadImage('images/game-card-horse.png'),
        loadImage('images/game-card-moon.png'),
        loadImage('images/game-card-railroad.png'),
        loadImage('images/game-card-snake.png')
    ];
}

function setup() {
    let cnv = createCanvas(850, 850);
    cnv.mousePressed(canvasPressed);
    background('Peru');
    let selectedFaces = [];
    for (let z = 0; z < 8; z++) {
        const randomIdx = floor(random(cardFaceArray.length));
        const face = cardFaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        //remove used card face 
        cardFaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for(let k = 0; k < 4; k++) {
        for(let i = 0; i < 4; i++) {
            const faceImage = selectedFaces.pop();
            cards.push(new Card(firstX, firstY, faceImage));
            firstX += 182.5;
        }
        firstY += 182.5;
        firstX = 75;
    }
    
}

function draw() {
    background('PapayaWhip');
    cursor('images/cursor-01.png');
    if (gameState.numMatched === gameState.totalPairs) {
        yeehawSound.play();
        yeehawSound.setVolume(.2);
        fill('MidnightBlue');
        textSize(30);
        textAlign(CENTER);
        textFont(fontCottonwood);
        text('You Win this round, partner.', 425, 50);
        noLoop();
    } else {
        fill('Sienna');
        textSize(30);
        textAlign(CENTER);
        textFont(fontCottonwood);
        text('Rootin\' Tootin\' Match n\' Shoot Em\' ', 425, 50);
    }
    for (let j = 0; j < cards.length; j++) {
        if(!cards[j].isMatch) {
            cards[j].face = DOWN;
        }
        cards[j].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill('MidnightBlue');
    textFont(fontCottonwood);
    textSize(24);
    text('attempts: '  + gameState.attempts, 150, 820);
    text('matches: ' + gameState.numMatched, 350, 820);
}

function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for(let j = 0; j < cards.length; j++) {
        // first check flipped cards lenght and then trigger flip
        if(gameState.flippedCards.length < 2 && cards[j].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[j]);
            gameState.flippedCards.push(cards[j]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            // cards match -> Time to score
            // mark cards as machted so they don't slip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            // empty the flipped cards array
            gameState.flippedCards.length = 0;
            // increment the score
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1500)
        }
    }
}

class Card {
    constructor(x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 150;
        this.height = 150;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }
    
    show () {
        if(this.face == UP || this.isMatch) {
            fill(0);
            rect(this.x, this.y, this.width, this.height);
            image(this.cardFaceImg, this.x, this.y);
        } else {
            fill('MidnightBlue');
            rect(this.x, this.y, this.width, this.height);
            image(cardBack, this.x, this.y);
        }
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip();
            return true;
        } else {
            return false;
        }
    }

    flip () {
        if(this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show ();
    }
}


function shuffleArray(array) {
    let counter = array.length;
    while (counter > 0) {
        const idx = Math.floor(Math.random() * counter);
        counter--;
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}



function title() {
    fill('PapayaWhip');
    textSize(36);
    textAlign(CENTER);
    textFont(fontCottonwood);
    text('Rootin\' Tootin\' Match n\' Shoot Em\' ', 425, 50);
}

function canvasPressed() {
    shootSound.play();
    shootSound.setVolume(.2);
  }