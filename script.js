// Importation des questions depuis un autre fichier
import { quizQuestions } from "./questions.js";

// Sélection des éléments du DOM
let answerOptions = document.querySelectorAll(".answer");
let questionText = document.getElementById("question");
let answers_area = document.getElementById("answers");
const score_num = document.getElementById("score_num");
const FaildSound = document.getElementById("Wrong");
const CorrectSound = document.getElementById("Correct");
const start_btn = document.getElementById("start_btn");
const name_input = document.getElementById("name_input");

// Structure HTML du quiz (insérée dynamiquement)
const quiz_screen = `
            <div id="timer"><span id="time"></span>s</div>
            <div id="question"></div>
            <div id="answers">
                <div id="AB-section">
                    <button class="answer"><span></span></button>
                    <button class="answer"><span></span></button>
                </div>
                <div id="CD-section">
                    <button class="answer"><span></span></button>
                    <button class="answer"><span></span></button>
                </div>
            </div>
            <p id="questions_num"><span id="questioni"></span> of 20 questions</p>`;
// Variables utilisées pendant la Quiz
let stop_resolve;
let stopTimeout;
let score;
let timer;
let correct_ans ;
// Mélanger les questions ou les réponses
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Fonction pour créer un délai asynchrone
function stop(st){
    return new Promise((resolve) => {
        stop_resolve=resolve;
        stopTimeout=setTimeout(resolve, st * 1000);
    });
}

// Trouve le bouton correspondant à la bonne réponse (A,B,C,D)
function find_correct_button(answer){
  return answerOptions[answer.charCodeAt(0) - 'A'.charCodeAt(0)]
}
// Démarrage du quiz après validation du nom
start_btn.addEventListener("click", () => {
    const user_name = name_input.value.trim();
    // Validation du nom
    if (user_name === "") {
        name_input.classList.add("wrong");
        setTimeout(() => {
            name_input.classList.remove("wrong");
        }, 500);
        return;
    }
    // Affiche le nom du joueur et insère l'interface du quiz
    document.getElementById("user_name").textContent = user_name;
    document.getElementById("Quiz").innerHTML = quiz_screen;
    // Mise à jour des éléments du DOM (car ils ont été remplacés dans le innerHTML)
    answerOptions = document.querySelectorAll(".answer");
    questionText = document.getElementById("question");
    answers_area = document.getElementById("answers");
    // Gestion d'un clic sur une réponse
    answers_area.addEventListener("click",async (e) => {
        if (!e.target.classList.contains("answer")) return;
        let wait_time;
        document.getElementById("tick").pause();
        document.getElementById("tick").muted = true;
        clearInterval(timer);
        // Désactiver les boutons pour éviter plusieurs clics
        answerOptions.forEach((btn) => {
            btn.disabled = true;
        })
        if (stopTimeout) {
            clearTimeout(stopTimeout);
            stopTimeout = null;
        }
        // Vérifie la bonne réponse
        if(e.target.textContent[0] == correct_ans){
            e.target.classList.add("correct")
            score++;
            score_num.textContent = score;
            CorrectSound.play();
            wait_time = 6000;
        }else{
            e.target.classList.add("wrong")
            find_correct_button(correct_ans).classList.add("correct");
            FaildSound.play()
            wait_time = 3000;
        }
        // Après le délai on continue le quiz
        setTimeout(() => {
            stop_resolve();
        }, wait_time);
    })
    startQuiz();
});
// Affiche une question
function loadQuestion(index, questionsArray) {
    score_num.textContent = score;
    const currentQuestion = questionsArray[index];
    const questioni = index + 1;
    document.getElementById("questioni").textContent = questioni;
    questionText.textContent = currentQuestion.question;
    // Affiche les 4 options
    answerOptions.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
    });
    document.getElementById("tick").muted = false;
    correct_ans = currentQuestion.answer;
    
}
// Gestion du timer et affichage des questions
async function Quiz(index,startTime, questionsArray) {
    const currentQuestion = questionsArray[index];
    correct_ans = currentQuestion.answer;
    document.getElementById("timer").style.color = "white";
    // Timer dégressif
    timer = setInterval(async () => {
        startTime--;
        document.getElementById("timer").textContent = `${startTime}s`;
        // Si temps écoulé
        if (startTime <= 0) {
            clearInterval(timer);
            answerOptions.forEach((btn) => {
              btn.disabled = true;
            })
            await stop(1.5);
            find_correct_button(correct_ans).classList.add("correct");
            document.getElementById("tick").pause();
            FaildSound.play();
        }
        // Dernières secondes → couleur rouge + beep
        else if(startTime == 10){
            document.getElementById("tick").currentTime = 0;
            document.getElementById("timer").style.color = "red";
            document.getElementById("tick").play();
        }
    }, 1000);
    // Charger la question et réinitialiser l'état des boutons
    loadQuestion(index, questionsArray);
    document.getElementById("timer").textContent = `${startTime}s`;
    answerOptions.forEach((btn) => {
        btn.classList.remove("correct","wrong");
        btn.disabled = false;
    })
};
// Lancement du quiz complet
async function startQuiz() {
    score = 0;
    let index = 0;
    const randomizedQuestions = shuffleArray([...quizQuestions]);
    // Boucle principale des 20 questions
    while (index < 20) {
        Quiz(index, 13 , randomizedQuestions);
        await stop(17);
        index++;
    }
    // Gestion du meilleur score enregistré
    let highScore = localStorage.getItem("highscore");
    if(!highScore || score > highScore){
      localStorage.setItem("highscore",score);
      highScore = score
    }
    // Affichage de l'écran final du quiz
    document.getElementById("Quiz").innerHTML = `
    <h2>Quiz Finished!</h2>
    <p>Your Score: ${score}/20</p>
    <p>Highest Score: ${highScore}/20</p>
    <button id="restart">Play Again</button>`;
    // Restart du quiz
    document.getElementById("restart").addEventListener("click", () => {
        // Réinsertion de l'UI du quiz
        document.getElementById("Quiz").innerHTML = quiz_screen;
        answerOptions = document.querySelectorAll(".answer");
        questionText = document.getElementById("question");
        answers_area = document.getElementById("answers");
        // Ré-attachement des événements (même logique que plus haut)
        answers_area.addEventListener("click",async (e) => {
            if (!e.target.classList.contains("answer")) return;
            let wait_time;
            document.getElementById("tick").pause();
            document.getElementById("tick").muted = true;
            clearInterval(timer);
            answerOptions.forEach((btn) => {
                btn.disabled = true;
            })
            if (stopTimeout) {
                clearTimeout(stopTimeout);
                stopTimeout = null;
            }
            if(e.target.textContent[0] == correct_ans){
                e.target.classList.add("correct")
                score++;
                score_num.textContent = score;
                CorrectSound.play();
                wait_time = 6000;
            }else{
                e.target.classList.add("wrong")
                find_correct_button(correct_ans).classList.add("correct");
                FaildSound.play()
                wait_time = 3000;
            }
            setTimeout(() => {
                stop_resolve();
            }, wait_time);
        })
        startQuiz();
    });
}