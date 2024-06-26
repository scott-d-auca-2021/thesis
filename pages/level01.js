const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerButtons");
const nextButton = document.getElementById("nextBtn");
const endButton = document.getElementById("endBtn");

let initialZombiePosition = 85;

let zombiePosition = 85; // Initial position of the zombie (percent of the container width)
const moveStep = 12 ; // Number of percentage points the zombie moves closer per incorrect answer

let fail = false;



function rand() {
    return Math.floor(Math.random() * questions.length);
}

let currentQuestionIndex = rand();
let score = 0;
let letterToAdd;
let numOfQuestions;


function resetState() {
    nextButton.style.display = "none";
    nextButton.innerHTML= "Дальше";
    if (zombiePosition <9){
        // zombiePosition = initialZombiePosition; // Reset the zombie's position.
        // document.querySelector('.zombie').style.left = `${zombiePosition}%`; // Reset the zombie's style.
    }
    
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestion() {
    resetState();
    if (currentQuestionIndex === undefined) {
        currentQuestionIndex = rand();
        console.log(currentQuestionIndex);
    }

    let currentQuestion = questions[currentQuestionIndex];

    questionElement.innerHTML = currentQuestion.question;
    MathJax.typeset([questionElement]);

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        console.log(answer.text);
        button.classList.add("gameBtn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function startQuiz() {
    score = 0;
    numOfQuestions = 0;
    zombiePosition = initialZombiePosition; // Reset the zombie's position.
    document.querySelector('.zombie').style.left = `${zombiePosition}%`; // Reset the zombie's style.
    nextButton.innerHTML = "Дальше";
    showQuestion();
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    numOfQuestions++;
    if (isCorrect){
        selectedBtn.classList.add("correct");
        //here we do action when correct answer is selected and we update user's level1 String appeding 'a' to it
        updateLevelOneA();
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
        //here we do action when INcorrect answer is selected and we update user's level1 String appeding 'b' to it
        updateLevelOneB();
        moveZombieCloser();


    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();

    const lastDigit = score % 10;
    const beforeLastDigit = Math.floor((score / 10) % 10); // To handle cases like 11-14 correctly

    let questionSuffix;

    // Determine the correct suffix based on the last digit of the score
    if (lastDigit === 1 && beforeLastDigit !== 1) {
        questionSuffix = "вопрос";
    } else if (lastDigit >= 2 && lastDigit <= 4 && beforeLastDigit !== 1) {
        questionSuffix = "вопроса";
    } else {
        questionSuffix = "вопросов";
    }

    questionElement.innerHTML = `Вы ответили на ${score} ${questionSuffix} из ${numOfQuestions}`;
    nextButton.innerHTML= "Играть заново";
    //nextButton.style.display = "block";
}

function handleNextButton(){
    //if (zombiePosition >=9){
        if (fail){
            zombiePosition = initialZombiePosition; // Reset the zombie's position.
            document.querySelector('.zombie').style.left = `${zombiePosition}%`; // Reset the zombie's style.
            fail = false;
            score = 0;
            numOfQuestions = 0;
        }
        currentQuestionIndex = rand();
        showQuestion();
    //}
}

nextButton.addEventListener("click", () => {
    handleNextButton();
});


function updateLevelOneA() {
    //const sessionID = document.cookie.split('=')[1]; // Assuming session ID is stored as a cookie
    fetch("/updateLevelOneA", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            //"Session-ID": sessionID
        },
        credentials: 'include'//
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to update level1 data");
        }
        console.log("Level1 data updated successfully");
    })
    .catch(error => {
        console.error("Error updating level1 data:", error);
    });
}

function updateLevelOneB() {
    //const sessionID = document.cookie.split('=')[1]; // Assuming session ID is stored as a cookie
    fetch("/updateLevelOneB", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            //"Session-ID": sessionID
        },
        credentials: 'include' //
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to update level1 data");
        }
        console.log("Level1 data updated successfully");
    })
    .catch(error => {
        console.error("Error updating level1 data:", error);
    });
}

function moveZombieCloser() {
    if (zombiePosition > 4) { // Ensures the zombie does not overlap the hero completely
        zombiePosition -= moveStep;
    }
    document.querySelector('.zombie').style.left = `${zombiePosition}%`;
    
    if (zombiePosition <9){
        fail = true;
        showScore();
    }
}



startQuiz();
