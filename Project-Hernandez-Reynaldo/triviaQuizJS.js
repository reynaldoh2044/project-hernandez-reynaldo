
var s3E9Content = {
    "episodeTitle":"Flaming Moe's",
    "questions": ["What is Kent Brockman's show called?",
                "How long has Springfield Tire Yard been burning?",
                "What did Moe spend $10,000 on?",
                "Who invented the 'Flaming Moe'?",
                "What is Homer's first test while inventing a cocktail?",
                "What was the Flaming Moe's cocktail original name?",
                "What is the Flaming Moe's secret ingredient?",
                "Who was Bart's 'The Inventor I Admire' school project on?",
                "What did Moe offer Aerosmith so they would play music?",
                "How much money was offered to buy the Flaming Moe recipe?"],
    "correctAnswers": ["Eye On Springfield",
                        "25 years",
                        "A Love Tester Machine",
                        "Homer",
                        "Whether or not it makes you go blind",
                        "Flaming Homer",
                        "Children's Cough Syrup",
                        "Homer",
                        "Free Pickled Eggs",
                        "1 Milliion Dollars"]
}

var s3E9Answers = [
    ["Eye On Springfield","Springfield Now", "What's Up Springfield", "Oh My Springfield"],
    ["10 years", "25 years", "100 years", "37 years"],
    ["A new bathroom", "Rat poison", "A Love Tester Machine", "A beat up car"],
    ["Homer", "Lenny", "Moe","The Duff Brewing Company"],
    ["Will you instantly sleep","Does it make you go cross-eyed", "Does it taste like heaven", "Whether or not it makes you go blind"],
    ["Flaming Homer", "Flaming Blue", "Flem Blazer", "A Moe Torch"],
    ["Duff Sharp Tequila","Duff Chocolate Beer","Old Gasoline", "Children's Cough Syrup"],
    ["Duff Man", "Moe", "Homer", "Mr. Burns"],
    ["Free Pickles","Free Flaming Moes'","Free Pickled Eggs","Free Pickled Pigs Feet"],
    ["1 Million Dollars", "10 Million Dollars","100 Million Dollars","5 Million Dollars"]
]

var episodeTitle = document.getElementById('episodeTitle').textContent = s3E9Content.episodeTitle;
var currentQuestion = document.getElementById('question');
currentQuestion.textContent = s3E9Content.questions[0];

//Setting answers above buttons
var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');
var answer4 = document.getElementById('answer4');

//Setting radio Button Value
var answer1B = document.getElementById('answer1B');
var answer2B = document.getElementById('answer2B');
var answer3B = document.getElementById('answer3B');
var answer4B = document.getElementById('answer4B');

answer1.textContent = s3E9Answers[0][0];
answer1.nodeValue = s3E9Answers[0][0];

answer2.textContent = s3E9Answers[0][1];
answer2.nodeValue = s3E9Answers[0][1];

answer3.textContent = s3E9Answers[0][2];
answer3.nodeValue = s3E9Answers[0][2];

answer4.textContent = s3E9Answers[0][3];
answer4.nodeValue = s3E9Answers[0][3];

var numCorrect = 0;
var currentQuestionIndex = 0;

function nextQuestion(event){
    currentQuestionIndex += 1;
    currentQuestion.textContent = s3E9Content.questions[currentQuestionIndex];

    answer1.textContent = s3E9Answers[currentQuestionIndex][0];
    answer1.nodeValue = s3E9Answers[currentQuestionIndex][0];

    answer2.textContent = s3E9Answers[currentQuestionIndex][1];
    answer2.nodeValue = s3E9Answers[currentQuestionIndex][1];

    answer3.textContent = s3E9Answers[currentQuestionIndex][2];
    answer3.nodeValue = s3E9Answers[currentQuestionIndex][2];

    answer4.textContent = s3E9Answers[currentQuestionIndex][3];
    answer4.nodeValue = s3E9Answers[currentQuestionIndex][3];
}

document.getElementById('nextButton').addEventListener("click",nextQuestion);