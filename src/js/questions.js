// The following code starts Mock Service Worker tool which allows you to simulate a backend (an API) for building your apps that talk to a remote service. You can visit https://mswjs.io for details on this utility and check src/api/routes.js for a sample API route that you can edit/create as needed to simulate a real world API. This simulated backend will not be part of the completed application (built edition) and you must use a real world backend built using Node.js + Express or Java + Spring Boot to provide such a service.

// If you do not require a simulated backend, you can remove the code shown below.

const apiStatus = document.querySelector("#api-status");

let quizData = {
  music: [
    {
      id: 1,
      question: "Which of the following is not a type of music notation?",
      options: [
        "Standard notation",
        "Tab notation",
        "Morse code notation",
        "Graphics notation",
      ],
      answer: "Morse code notation",
      category: "music",
    },
    {
      id: 2,
      question: "What is the most common time signature in classical music?",
      options: ["3/4", "4/4", "5/4", "6/8"],
      answer: "4/4",
      category: "music",
    },
    {
      id: 3,
      question:
        "Which of the following is not a type of instrument in a symphony orchestra?",
      options: ["Violin", "Piano", "Harp", "Theremin"],
      answer: "Theremin",
      category: "music",
    },
    {
      id: 4,
      question: "What is the most common key in pop music?",
      options: ["C Major", "G Major", "D Major", "A Major"],
      answer: "C Major",
      category: "music",
    },
    {
      id: 5,
      question: "Which of the following is not a type of chord?",
      options: ["Major", "Minor", "Diminished", "Flat"],
      answer: "Flat",
      category: "music",
    },
    {
      id: 6,
      question: "Which of the following is not a type of music genre?",
      options: ["Jazz", "Blues", "Rock", "Applesauce"],
      answer: "Applesauce",
      category: "music",
    },
    {
      id: 7,
      question: "Which of the following is not a type of music theory?",
      options: ["Harmony", "Counterpoint", "Form", "Cooking"],
      answer: "Cooking",
      category: "music",
    },
    {
      id: 8,
      question: "What is the most common tempo marking in classical music?",
      options: ["Allegro", "Andante", "Adagio", "Moderato"],
      answer: "Allegro",
      category: "music",
    },
    {
      id: 9,
      question: "Which of the following is not a type of musical form?",
      options: ["Sonata", "Symphony", "Concerto", "Spaghetti"],
      answer: "Spaghetti",
      category: "music",
    },
    {
      id: 10,
      question:
        "Which of the following is not a type of music notation software?",
      options: ["Sibelius", "Finale", "MuseScore", "Microsoft Word"],
      answer: "Microsoft Word",
      category: "music",
    },
  ],
  "modern-art": [
    {
      id: 11,
      question: "Which artist is known for coining the term 'Surrealism'?",
      options: [
        "Pablo Picasso",
        "Salvador Dali",
        "Vincent van Gogh",
        "Henri Matisse",
      ],
      answer: "Salvador Dali",
      category: "modern-art",
    },
    {
      id: 12,
      question:
        "Which movement is associated with the use of abstract forms and shapes in art?",
      options: ["Impressionism", "Expressionism", "Futurism", "Cubism"],
      answer: "Cubism",
      category: "modern-art",
    },
    {
      id: 13,
      question:
        "Which artist is known for painting the work 'The Persistence of Memory'?",
      options: [
        "Pablo Picasso",
        "Salvador Dali",
        "Vincent van Gogh",
        "Henri Matisse",
      ],
      answer: "Salvador Dali",
      category: "modern-art",
    },
    {
      id: 14,
      question: "Which artist is known for creating the painting 'The Scream'?",
      options: [
        "Vincent van Gogh",
        "Salvador Dali",
        "Edvard Munch",
        "Claude Monet",
      ],
      answer: "Edvard Munch",
      category: "modern-art",
    },
    {
      id: 15,
      question:
        "What movement was associated with the use of bold, bright colors and thick brushstrokes?",
      options: ["Impressionism", "Expressionism", "Fauvism", "Cubism"],
      answer: "Fauvism",
      category: "modern-art",
    },
    {
      id: 16,
      question:
        "What movement was associated with the use of bright colors, simplified forms, and a focus on movement and speed",
      options: [
        "Impressionism",
        "Futurism",
        "Surrealism",
        "Abstract Expressionism",
      ],
      answer: "Futurism",
      category: "modern-art",
    },
    {
      id: 17,
      question:
        "Which artist is known for creating the painting 'Water Lilies'?",
      options: ["Claude Monet", "Paul Cezanne", "Paul Gauguin", "Paul Klee"],
      answer: "Claude Monet",
      category: "modern-art",
    },
    {
      id: 18,
      question:
        "Which artist is known for creating the painting 'Les Demoiselles d'Avignon'?",
      options: [
        "Henri Matisse",
        "Vincent van Gogh",
        "Salvador Dali",
        "Pablo Picasso",
      ],
      answer: "Pablo Picasso",
      category: "modern-art",
    },
    {
      id: 19,
      question: "Which artist is known for creating the painting 'Guernica'?",
      options: [
        "Claude Mone",
        "Paul Cezanne",
        "Pablo Picasso",
        "Vincent van Gogh",
      ],
      answer: "Pablo Picasso",
      category: "modern-art",
    },
    {
      id: 20,
      question:
        "Which artist is known for creating the sculpture 'The Thinker'?",
      options: ["Auguste Rodin", "Alexander Calder", "Jean Arp", "Henry Moore"],
      answer: "Auguste Rodin",
      category: "modern-art",
    },
  ],

  coding: [
    {
      id: 21,
      question: "What is the correct syntax for an if statement in Python?",
      options: [
        "if (condition):",
        "if condition",
        "if: condition",
        "if condition:",
      ],
      answer: "if condition:",
      category: "coding",
    },
    {
      id: 22,
      question: "Which of the following is not a data type in JavaScript?",
      options: ["String", "Number", "Boolean", "ArrayList"],
      answer: "ArrayList",
      category: "coding",
    },
    {
      id: 23,
      question: "Which of the following is used to declare a variable in Java?",
      options: ["var", "let", "const", "int"],
      answer: "int",
      category: "coding",
    },
    {
      id: 24,
      question: "What is the correct syntax for a for loop in C#?",
      options: [
        "for i = 0 to 10",
        "for (i = 0; i <= 10; i++)",
        "for (int i = 0; i <= 10)",
        "for i in range(0, 10)",
      ],
      answer: "for (i = 0; i <= 10; i++)",
      category: "coding",
    },
    {
      id: 25,
      question: "Which of the following is not a looping structure in PHP?",
      options: ["while", "for", "do-while", "foreach"],
      answer: "foreach",
      category: "coding",
    },
    {
      id: 26,
      question: "Which of the following is not a valid operator in C++?",
      options: ["+", "-", "*", "$"],
      answer: "$",
      category: "coding",
    },
    {
      id: 27,
      question:
        "In which programming language is 'print' used for displaying output?",
      options: ["Python", "JavaScript", "Java", "C++"],
      answer: "Python",
      category: "coding",
    },
    {
      id: 28,
      question: "What is the correct syntax for a function in Ruby?",
      options: ["function name()", "def name", "function name", "def name()"],
      answer: "def name()",
      category: "coding",
    },
    {
      id: 29,
      question: "Which of the following is not a type of variable in Swift?",
      options: ["Int", "String", "Double", "Object"],
      answer: "Object",
      category: "coding",
    },
    {
      id: 30,
      question: "In which programming language is '#' used for commenting?",
      options: ["Python", "JavaScript", "Java", "C++"],
      answer: "C++",
      category: "coding",
    },
  ],
};

var quiz = document.getElementById("quiz");
var answer = document.querySelectorAll(".answer");
var question = document.getElementById("question");
var option_a = document.getElementById("a_value");
var option_b = document.getElementById("b_value");
var option_c = document.getElementById("c_value");
var option_d = document.getElementById("d_value");
var submitbtn = document.getElementById("submit");
var previousBtn = document.getElementById("previous");

var v1 = parent.document.URL.substring(
  parent.document.URL.indexOf("?"),
  parent.document.URL.length
);
var v2 = v1.substring(8);
console.log(v2);
var currentQuestion = 0;
var quizScore = 0;

loadQuiz();

function loadQuiz() {
  deselect();
  question.innerHTML = quizData[v2][currentQuestion].question;
  option_a.innerText = quizData[v2][currentQuestion].options[0];
  option_b.innerText = quizData[v2][currentQuestion].options[1];
  option_c.innerText = quizData[v2][currentQuestion].options[2];
  option_d.innerText = quizData[v2][currentQuestion].options[3];
}
console.log();
function deselect() {
  answer.forEach((answer) => (answer.checked = false));
}

submitbtn.addEventListener("click", () => {
  var selectedoption;
  answer.forEach((answer) => {
    if (answer.checked) {
      selectedoption = answer.id;
    }
  });

  if (
    quizData[v2][currentQuestion].options[selectedoption] ==
    quizData[v2][currentQuestion].answer
  ) {
    quizScore = quizScore + 1;
  }

  currentQuestion = currentQuestion + 1;
  if (currentQuestion !== quizData[v2].length) {
    loadQuiz();
  }
  if (currentQuestion == quizData[v2].length) {
    document.getElementById(
      "quizdiv"
    ).innerHTML = `<h3>You have answered ${quizScore} correctly out of ${quizData[v2].length}</h3>`;
  } else {
    loadQuiz();
  }
});

previousBtn.addEventListener("click", () => {
  console.log("pre clicked");
  if (currentQuestion !== 0) {
    currentQuestion = currentQuestion - 1;
  }
  loadQuiz();
});
