let monoSynth;
let notes = [];

function setup() {
    let cnv = createCanvas(1400, 800);
    background(220);
    noStroke();

    for(let i = 0; i < 8; i++) {
        let x = i * 100 + 300;
        let y = 300;
        let s = 100;
        let n = new Note(x, y, s); //create note box
        notes.push(n);    
        console.log(notes)
    }
    
    monoSynth = new p5.MonoSynth();
}

function mousePressed() {
    for (let i = 0; i < 8; i++) {
      notes[i].playNote(mouseX, mouseY);
    }
}

function mouseReleased() {
    for (let i = 0; i < 8; i++) {
      notes[i].stopNote(mouseX, mouseY);
    }
}


function draw() {
    for (let i = 0; i < 8; i++) {
        notes[i].colorBlocks();
        notes[i].load();
      }
    fill(0);
    noStroke();
    textSize(24);
    textAlign(CENTER);
    text('Click the squares to play', 700, 200);
}

function playSynth() {
    userStartAudio();
  
    let note;

    if (mouseX >= 300 && mouseX <= 400) {
        note = 'C4';
    }
    if (mouseX >= 400 && mouseX <= 500) {
        note = 'D4';
    }
    if (mouseX >= 500 && mouseX <= 600) {
        note = 'E4';
    }
    if (mouseX >= 600 && mouseX <= 700) {
        note = 'F4';
    }
    if (mouseX >= 700 && mouseX <= 800) {
        note = 'G4';
    }
    if (mouseX >= 800 && mouseX <= 900) {
        note = 'A5';
    }
    if (mouseX >= 900 && mouseX <= 1000) {
        note = 'B5';
    }
    if (mouseX >= 1000 && mouseX <= 1100) {
        note = 'C5';
    }

    console.log(note);

    // note velocity (volume, from 0 to 1)
    let velocity = random(.5, 1);
    // time from now (in seconds)
    let time = 0;
    // note duration (in seconds)
    let dur = 1/4;
  
    monoSynth.play(note, velocity, time, dur);
  }


class Note {
    constructor(x, y, s) {
      this.x = x;
      this.y = y;
      this.s = s;
      this.width = 100;
      this.height = 100;
      this.col = [0, 25, 6, 8, 3, 5, 255, 9];
    }
    
    colorBlocks() {
        stroke(255);
        fill(color(this.col));
    }

    load() {
        square(this.x, this.y, this.s);
    }

    playNote(mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            this.col = color('#ffffff');
            playSynth();
        }
    }

    stopNote(mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            this.col = [0, 25, 6, 8, 3, 5, 255, 9];
        }
    }

}
