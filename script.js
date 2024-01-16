// Word Guess Game
const words = ["apple", "banana", "cherry", "grape", "orange"]; // Add more words as needed
let currentWord = "";
let guessedWord = [];
let wins = 0;
let losses = 0;
let timer;

// Quiz Questions
const quizQuestions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    question: "Which CSS property is used to control the text size?",
    options: ["font-size", "text-size", "font-style"],
    correctAnswer: "font-size"
  },
  {
    question: "What is the purpose of the JavaScript 'typeof' operator?",
    options: ["Checking the type of a variable", "Declaring a variable", "Loop control"],
    correctAnswer: "Checking the type of a variable"
  }
];

let currentQuestionIndex = 0;
let userScore = 0;

// Function to initialize the game
function initializeGame() {
  currentWord = getRandomWord();
  guessedWord = Array(currentWord.length).fill('_');
  displayWord();
  updateScore();
  startTimer();
}

// Function to initialize the quiz
function initializeQuiz() {
  document.getElementById('quiz-container').style.display = 'block';
  displayQuestion();
}

// ... (Rest of the script.js)

// Event listener for the quiz start button
document.getElementById('quiz-start-button').addEventListener('click', function() {
  initializeQuiz();
});

// ... (Rest of the script.js)
