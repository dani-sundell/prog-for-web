const quiz =  [
    {question:"Which dog breed is considered the fastest?", answer:"Greyhound"},
    {question:"Which dog breed is considered the smartest?", answer:"Border Collie"},
    {question:"Which is the most popular dog breed in the U.S.?", answer:"Labrador Retriever"},
    {question:"Which is the most common job dogs do today?", answer:"Personal medical service"},
    {question:"In which city are there more dogs than children?", answer:"San Francisco"}
];

const quizNumber = Math.floor(Math.random() * (quiz.length));

console.log(quizNumber);

const quizQuestion = window.prompt(quiz[quizNumber].question);

const quizAnswer = quiz[quizNumber].answer;

const quizAlert = window.alert("You answered " + quizQuestion + ". The correct answer is " + quizAnswer + ".");