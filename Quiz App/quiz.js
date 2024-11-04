const questions = [
    {
        question: 'What is the largest Animal in the world?',
        answers: [
            {text: 'Shark', correct: false},
            {text: 'Blue Whale', correct: true},
            {text: 'Elephant', correct: false},
            {text: 'Giraffe', correct: false},
        ]
    },
    {
        question: 'What is the smallest continent in the world?',
        answers: [
            {text: 'Asia', correct: false},
            {text: 'America', correct: false},
            {text: 'Antarctica', correct: false},
            {text: 'Australia', correct: true},
        ]
    },
    {
        question: 'What is the capital of France?',
        answers: [
            {text: 'Berlin', correct: false},
            {text: 'Madrid', correct: false},
            {text: 'Paris', correct: true},
            {text: 'Lisbon', correct: false},
        ]
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        answers: [
            {text: 'Charles Dickens', correct: false},
            {text: 'William Shakespeare', correct: true},
            {text: 'Mark Twain', correct: false},
            {text: 'Jane Austen', correct: false},
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            {text: 'Earth', correct: false},
            {text: 'Mars', correct: true},
            {text: 'Jupiter', correct: false},
            {text: 'Saturn', correct: false},
        ]
    },
    {
        question: 'What is the chemical symbol for water?',
        answers: [
            {text: 'O2', correct: false},
            {text: 'H2O', correct: true},
            {text: 'CO2', correct: false},
            {text: 'NaCl', correct: false},
        ]
    },
    {
        question: 'Which country is known as the Land of the Rising Sun?',
        answers: [
            {text: 'China', correct: false},
            {text: 'Japan', correct: true},
            {text: 'South Korea', correct: false},
            {text: 'Thailand', correct: false},
        ]
    },
    {
        question: 'What is the largest planet in our solar system?',
        answers: [
            {text: 'Earth', correct: false},
            {text: 'Mars', correct: false},
            {text: 'Jupiter', correct: true},
            {text: 'Saturn', correct: false},
        ]
    },
    {
        question: 'What is the currency of Japan?',
        answers: [
            {text: 'Yuan', correct: false},
            {text: 'Yen', correct: true},
            {text: 'Won', correct: false},
            {text: 'Baht', correct: false},
        ]
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: [
            {text: 'Vincent van Gogh', correct: false},
            {text: 'Pablo Picasso', correct: false},
            {text: 'Leonardo da Vinci', correct: true},
            {text: 'Claude Monet', correct: false},
        ]
    }
];
const questionelement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionelement.innerHTML = questionNumber + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('button');
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';
    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

function showScore() {
    resetState();
    questionelement.innerHTML = `Your Score: ${score} out of ${questions.length}`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();