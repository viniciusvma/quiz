let questions = [
    {
        question: "Qual é a raça de cachorro mais popular no mundo?",
        options: ["Labrador Retriever", "Pastor Alemão", "Beagle", "Golden Retriever"],
        answer: 0
    },
    {
        question: "Quantos anos tem um ano de vida de um gato em anos humanos, aproximadamente?",
        options: ["5 anos", "7 anos", "10 anos", "15 anos"],
        answer: 1
    },
    {
        question: "Qual é o animal de estimação mais comum em lares ao redor do mundo?",
        options: ["Cachorro", "Gato", "Peixe", "Pássaro"],
        answer: 0
    },
    {
        question: "O que os coelhos gostam de comer?",
        options: ["Carne", "Cenoura", "Pão", "Queijo"],
        answer: 1
    },
    {
        question: "Qual é a ave que não pode voar?",
        options: ["Papagaio", "Pinguim", "Canário", "Águia"],
        answer: 1
    },
    {
        question: "Qual é o som que um gato faz?",
        options: ["Latido", "Mugido", "Miado", "Relincho"],
        answer: 2
    },
    {
        question: "Qual é o animal mais lento do mundo?",
        options: ["Leão", "Tigre", "Elefante", "Bicho-preguiça"],
        answer: 3
    },
    {
        question: "Qual destes animais é um roedor?",
        options: ["Gato", "Cachorro", "Hamster", "Peixe"],
        answer: 2
    },
    {
        question: "Qual destes animais pode mudar de cor?",
        options: ["Cachorro", "Camaleão", "Cavalo", "Coelho"],
        answer: 1
    },
    {
        question: "Qual animal é conhecido como o melhor amigo do homem?",
        options: ["Gato", "Cachorro", "Papagaio", "Peixe"],
        answer: 1
    },
    {
        question: "Qual é o maior mamífero marinho?",
        options: ["Tubarão", "Golfinho", "Baleia", "Peixe-boi"],
        answer: 2
    },
    {
        question: "Qual é o habitat natural dos peixes?",
        options: ["Terra", "Água", "Ar", "Floresta"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    document.getElementById("questionText").textContent = currentQuestion.question;
    let answerButtons = document.querySelectorAll(".answer button");
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].textContent = currentQuestion.options[i];
    }
}

function checkAnswer(selectedIndex) {
    let currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
        score++;
        document.getElementById("score").innerText = score;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let resultText = score >= 7 
        ? 'Parabéns, você passou no teste!' 
        : 'Que pena, tente novamente!';
    document.getElementById("resultText").textContent = resultText;
    document.getElementById("resultModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("resultModal").style.display = "none";
}

window.onload = function() {
    displayQuestion();
};
