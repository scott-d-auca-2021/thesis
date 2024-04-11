const questionElement = document.getElementById("question");
const testEmailElement = document.getElementById("test");
const answerButtons = document.getElementById("answerButtons");
const nextButton = document.getElementById("nextBtn");


const userEmail = '<%=email%>';

let currentQuestionIndex = 0;
let score = 0;
let letterToAdd;
function rand() {
    return Math.floor(Math.random() * questions.length);
}

function resetState() {
    nextButton.style.display = "none";
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
    testEmailElement.innerHTML = userEmail;

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
    nextButton.innerHTML = "Next";
    showQuestion();
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        //here we do action when correct answer is selected and we update user's level1 String appeding 'a' to it
        updateLevelOneA();
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
        //here we do action when INcorrect answer is selected and we update user's level1 String appeding 'b' to it
        updateLevelOneB();


    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex = rand();

    showQuestion();
}

nextButton.addEventListener("click", () => {
    handleNextButton();
});

function updateLevelOneA() {
    const sessionID = document.cookie.split('=')[1]; // Assuming session ID is stored as a cookie
    fetch("/updateLevelOneA", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Session-ID": sessionID
        }
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
    const sessionID = document.cookie.split('=')[1]; // Assuming session ID is stored as a cookie
    fetch("/updateLevelOneB", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Session-ID": sessionID
        }
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



startQuiz();
