let rainSound;
let fireSound;
let forestSound;
let wavesSound;
let nightSound;

function preload(){
    rainSound = loadSound('sounds/rain.mp3');
    fireSound = loadSound('sounds/fire.mp3');
    forestSound = loadSound('sounds/forest.mp3');
    wavesSound = loadSound('sounds/waves.mp3');
    nightSound = loadSound('sounds/night.mp3');
    kesslerFont = loadFont('fonts/kessler.otf');
}

function setup() {
    let cnv = createCanvas(1220, 800);
    background(0);
    cnv.mousePressed(stopSound);
}

function draw() {
    
    //colors
    let colorRain = '#306BAC';
    let colorFire = '#D66D5D';
    let colorForest = '#5E6A39';
    let colorWaves = '#8AC6D0';
    let colorNight = '#1A1423';
    let typeColor = '#FFFFFF';

    //type
    let fontSize = '16px';
    let typeFace = 'kesslerFont, serif';

    //styles
    let paddingButton = '10px 20px 10px 20px';
    let borderButton = 'none';

    //Rain
    button = createButton('Rain');
    button.style('background-color', colorRain);
    button.style('font-size', fontSize);
    button.style('font-family', typeFace);
    button.style('padding', paddingButton);
    button.style('border', borderButton);
    button.style('color', typeColor);    
    button.position(180, 380);
    button.mousePressed(playRain);

    //Fire
    button = createButton('Fire');
    button.style('background-color', colorFire);
    button.style('font-size', fontSize);
    button.style('font-family', typeFace);
    button.style('padding', paddingButton); 
    button.style('border', borderButton);
    button.style('color', typeColor);   
    button.position(380, 380);
    button.mousePressed(playFire);

    //Forest
    button = createButton('Forest');
    button.style('background-color', colorForest);
    button.style('font-size', fontSize);
    button.style('font-family', typeFace);
    button.style('padding', paddingButton); 
    button.style('border', borderButton);
    button.style('color', typeColor);   
    button.position(580, 380);
    button.mousePressed(playForest);

    //Waves
    button = createButton('Waves');
    button.style('background-color', colorWaves);
    button.style('font-size', fontSize);
    button.style('font-family', typeFace);
    button.style('padding', paddingButton); 
    button.style('border', borderButton);
    button.style('color', typeColor);   
    button.position(780, 380);
    button.mousePressed(playWaves);

    //Night
    button = createButton('Night');
    button.style('background-color', colorNight);
    button.style('font-size', fontSize);
    button.style('font-family', typeFace);
    button.style('padding', paddingButton); 
    button.style('border', borderButton);
    button.style('color', typeColor);   
    button.position(980, 380);
    button.mousePressed(playNight);

    //instructions

    fill('#ffffff');
    textFont(kesslerFont);
    textAlign(CENTER);
    smooth();
    textSize(36);
    text('Press a button to play ambient sounds', 610, 200);
    textSize(24);
    text('Click anywhere on the Canvas to stop sounds', 610, 300);
}

//play sounds

function playRain() {
    rainSound.play();
    rainSound.setVolume(.025);
    rainSound.loop();
}

function playFire() {
    fireSound.play();
    fireSound.setVolume(.1);
    fireSound.loop();
}

function playForest() {
    forestSound.play();
    forestSound.setVolume(.3);
    forestSound.loop();
}

function playWaves() {
    wavesSound.play();
    wavesSound.setVolume(.1);
    wavesSound.loop();
}

function playNight() {
    nightSound.play();
    nightSound.setVolume(.1);
    nightSound.loop();
}


//stop sounds

function stopSound() {
    rainSound.stop();
    fireSound.stop();
    forestSound.stop();
    wavesSound.stop();
    nightSound.stop();
}