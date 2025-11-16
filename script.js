const quizQuestions = [
  {
    question: "Which HTML tag is used to create a heading that is the most important (largest and highest level)?",
    answer: "D",
    options: [
      "A - <heading>",
      "B - <h1_important>",
      "C - <h1-big>",
      "D - <h1>"
    ],
    difficulty: 0,
    category: "html"
  },
  {
    question: "What does the abbreviation HTML stand for?",
    answer: "B",
    options: [
      "A) Hyper Tool Multi Language",
      "B) Hyper Text Markup Language",
      "C) High Tech Modern Link",
      "D) Home Tool Management Links"
    ],
    difficulty: 0,
    category: "html"
  },
  {
    question: "Which property is used in CSS to change the text color of an element?",
    answer: "C",
    options: [
      "A) text-color",
      "B) font-color",
      "C) color",
      "D) background-color"
    ],
    difficulty: 0,
    category: "css"
  },
  {
    question: "Which of the following is the correct way to refer to an external stylesheet named styles.css within the HTML document?",
    answer: "B",
    options: [
      "A) <style src=\"styles.css\">",
      "B) <link rel=\"stylesheet\" type=\"text/css\" href=\"styles.css\">",
      "C) <stylesheet>styles.css</stylesheet>",
      "D) <style link=\"styles.css\">"
    ],
    difficulty: 0,
    category: "css"
  },
  {
    question: "Which of the following keywords is used to declare a variable in JavaScript?",
    answer: "C",
    options: [
      "A) variable",
      "B) v",
      "C) var",
      "D) string"
    ],
    difficulty: 0,
    category: "js"
  },
  {
    question: "How do you write a single-line comment in JavaScript?",
    answer: "B",
    options: [
      "A) /* This is a comment */",
      "B) // This is a comment",
      "C) ",
      "D) # This is a comment"
    ],
    difficulty: 0,
    category: "js"
  }
];
const answerOptions = document.querySelectorAll(".answer");
const questionText = document.getElementById("question");
const answers_area = document.getElementById("answers");

let score;
let timer;
let correct_ans = quizQuestions[0].answer
function stop(st){
    return new Promise((resolve) => {
        setTimeout(resolve, st * 1000);
    });
}

answers_area.addEventListener("click",(e) => {
    if(e.target.textContent[0] == correct_ans){
        e.target.classList.add("correct")
    }else{
        e.target.classList.add("wrong")
    }
    answerOptions.forEach((btn) => {
        btn.disabled = true;
    })
})
function loadQuestion(index) {
    const currentQuestion = quizQuestions[index];
    const questioni = index + 1;
    document.getElementById("questioni").textContent = questioni;
    questionText.textContent = currentQuestion.question;
    answerOptions.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
    });
    
}
async function Quiz(index,startTime) {
    let timer = setInterval(() => {
        startTime--;
        document.getElementById("timer").textContent = `${startTime}s`;
        if (startTime <= 0) {
            clearInterval(timer);
            loadQuestion(++index);
        }
    }, 1000);

    loadQuestion(index);
    correct_ans = quizQuestions[index].answer
    answerOptions.forEach((btn) => {
        btn.classList.remove("correct","wrong");
        btn.disabled = false;
    })
};
async function startQuiz() {
    score = 0;
    let index = 0;
    while (index < quizQuestions.length) {
        Quiz(index, 5);
        await stop(5);
        index++;
    }
}
startQuiz();