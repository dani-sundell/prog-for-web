let submitAnswerButton;
let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let numberRight = 0;
let numberWrong = 0;
let statements =  [
    {question:"Which dog breed is considered the fastest?", answer:"Greyhound"},
    {question:"Which dog breed is considered the smartest?", answer:"Border Collie"},
    {question:"Which is the most popular dog breed in the U.S.?", answer:"Labrador Retriever"},
    {question:"Which is the most common job dogs do today?", answer:"Personal medical service"},
    {question:"In which city are there more dogs than children?", answer:"San Francisco"}
];

function nextQuestion () {
    if(statements.length > 0) {
    const randomIndex = Math.ceil(Math.random() * statements.length - 1);
    return statements[randomIndex];
    }
}

function checkQuestion() {
    if (currentQuestion.answer === questionInput.value()) {
        statements = statements.filter(statementObj => {
            return currentQuestion.answer != statementObj.answer
        });
        response = 'Correct! Next question.';
        responseColor = 'SeaGreen';
        numberRight += 1;
    } else {
        response = 'Oops, that wasn\'t quite right. Try another.';
        responseColor = 'FireBrick';
        numberWrong += 1;
    }
    currentQuestion = nextQuestion();
    questionInput.value('');
    if (currentQuestion) {
        message = currentQuestion.question;
    }
    endAlert();
}

function reset () {
    numberRight = 0;
    numberWrong = 0;
    statements.length = 5;
    endAlert();
}

function endAlert() { //win or lose alert
    if (numberRight == 5) {
        response = 'You win!✨';
        responseColor = 'SeaGreen';
    } else if (numberWrong >= 5) {
        response = 'You lose. 💀';
        responseColor = 'FireBrick';
    } else if (numberRight == 0 && numberWrong == 0) {
        response = '';
    }
}

function buttons(){
    if (numberWrong >= 5) {
        submitAnswerButton = createButton('Play again?');
        submitAnswerButton.size(250, 25);
        submitAnswerButton.mousePressed(reset);
        submitAnswerButton.position(100, 475);
    } else {
        submitAnswerButton = createButton('Check answer');
        submitAnswerButton.size(250, 25);
        submitAnswerButton.mousePressed(checkQuestion);
        submitAnswerButton.position(100, 275);
    }
}

currentQuestion = nextQuestion();
let message = currentQuestion.question;


function setup() {
    createCanvas(windowWidth, windowHeight);
    heading = createElement('h1', ['Dog statements']);
    heading.position(100, 100);
    heading.style('color', 'IndianRed ');
    //input
    questionInput = createInput('');
    questionInput.size(250, 25);
    questionInput.position(100, 225);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function draw() {
    background('Linen');
    fill('Sienna');
    textSize(24);
    text(message, 100, 200);
    fill(responseColor);
    text(response, 100, 350);
    fill('black');
    textSize(16);
    text('Score: ' + numberRight + ' out of 5', 100, 400); //score
    text((5 - numberWrong) + ' wrong answers left until you lose.', 100, 450); //wrong counter
    buttons();
}