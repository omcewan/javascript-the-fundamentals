var javaScriptQuestions = [
  "Question 1: Which of the following is correct?",
  "Question 2: Which of the following type of variable is visible only within a function where it is defined?",
  "Question 3: Which built-in method combines the text of two strings and returns a new string?",
  "Question 4: Which built-in method returns the calling string value converted to upper case?",
  "Question 5: Which of the following function of Boolean object returns the primitive value of the Boolean object?",
  "Question 6: Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?",
];

var javaScriptAnswers = {
  A1: [
    "JavaScript is a lightweight, interpreted programming language.",
    "JavaScript has object-oriented capabilities that allows you to bulid interactivity into otherwise static HTML pages.",
    "The general purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.",
    "All of the above.",
  ],
  A2: [
    "Gobal Variable",
    "Local Variable",
    "Both of the Above",
    "None of the Above",
  ],
  A3: ["append()", "concat()", "attach()", "None of the above"],
  A4: ["toUpperCase()", "toUpper()", "changeCase()", "None of the above"],
  A5: ["toSource()", "valueOf()", "toString()", "None of the above"],
  A6: ["unshift()", "sort()", "splice()", "toString()"],
};

var answerKey = {
  Q1: javaScriptAnswers.A1[3],
  Q2: javaScriptAnswers.A2[1],
  Q3: javaScriptAnswers.A3[1],
  Q4: javaScriptAnswers.A4[0],
  Q5: javaScriptAnswers.A5[0],
  Q6: javaScriptAnswers.A6[0],
};

var yourScore = 0;

var optionBtnAEl = document.createElement("button");
optionBtnAEl.setAttribute("class", "btn-option");
var optionBtnBEl = document.createElement("button");
optionBtnBEl.setAttribute("class", "btn-option");
var optionBtnCEl = document.createElement("button");
optionBtnCEl.setAttribute("class", "btn-option");
var optionBtnDEl = document.createElement("button");
optionBtnDEl.setAttribute("class", "btn-option");
var optionBtnArr = [optionBtnAEl, optionBtnBEl, optionBtnCEl, optionBtnDEl];

var quizQuestionEl = document.querySelector(".questions");

var questionEl = document.createElement("p");

var startButtonEl = document.querySelector("#btn-start");

var displayScoreEl = document.createElement("p");
displayScoreEl.textContent = `${yourScore}`;

var endQuizEl = document.createElement("p");
endQuizEl.textContent = "Game Over! Here is how you did!";

var userNameEl = document.createElement("input");
userNameEl.setAttribute("type", "text");
userNameEl.setAttribute("value", "Your Name");
userNameEl.setAttribute("id", "user-name");

var submitBtnEl = document.createElement("input");
submitBtnEl.setAttribute("type", "submit");

var nextQuestionBtnEl = document.createElement("button");
nextQuestionBtnEl.setAttribute("id", "btn-next");
nextQuestionBtnEl.textContent = "Next Question";

var endButtonEl = document.createElement("button");
endButtonEl.setAttribute("id", "btn-end");
endButtonEl.textContent = "End Quiz";

var userName


/* choose the question to display when the next button is clicked. the option buttons are added after the
question was chosen */
function chooseQuestion() {
  switch (questionEl.textContent) {
    case "":
      questionEl.textContent = javaScriptQuestions[0];
      addOptionBtn();
      //quizQuestionEl.appendChild(nextQuestionBtnEl);
      break;
    case javaScriptQuestions[0]:
      questionEl.textContent = javaScriptQuestions[1];
      addOptionBtn();
      break;
    case javaScriptQuestions[1]:
      questionEl.textContent = javaScriptQuestions[2];
      addOptionBtn();
      break;
    case javaScriptQuestions[2]:
      questionEl.textContent = javaScriptQuestions[3];
      addOptionBtn();
      break;
    case javaScriptQuestions[3]:
      questionEl.textContent = javaScriptQuestions[4];
      addOptionBtn();
      break;
    case javaScriptQuestions[4]:
      questionEl.textContent = javaScriptQuestions[5];
      addOptionBtn();
      break;
  }
}

// add the text to the different option buttons. each button is add based on the text of the question
function addOptionBtn() {
  switch (questionEl.textContent) {
    case javaScriptQuestions[0]:
      for (let i = 0; i < javaScriptAnswers.A1.length; i++) {
        optionBtnArr[i].textContent = javaScriptAnswers.A1[i];
        optionBtnArr[i].setAttribute("class", "btn-option");
        quizQuestionEl.appendChild(optionBtnArr[i]);
      }
      //quizQuestionEl.appendChild(nextQuestionBtnEl);
      break;
    case javaScriptQuestions[1]:
      for (let i = 0; i < javaScriptAnswers.A2.length; i++) {
        optionBtnArr[i].textContent = javaScriptAnswers.A2[i];
        optionBtnArr[i].setAttribute("class", "btn-option");
        quizQuestionEl.appendChild(optionBtnArr[i]);
      }
      //quizQuestionEl.appendChild(nextQuestionBtnEl);
      break;
    case javaScriptQuestions[2]:
      for (let i = 0; i < javaScriptAnswers.A3.length; i++) {
        optionBtnArr[i].textContent = javaScriptAnswers.A3[i];
        optionBtnArr[i].setAttribute("class", "btn-option");
        quizQuestionEl.appendChild(optionBtnArr[i]);
      }
      //quizQuestionEl.appendChild(nextQuestionBtnEl);
      break;
    case javaScriptQuestions[3]:
      for (let i = 0; i < javaScriptAnswers.A4.length; i++) {
        optionBtnArr[i].textContent = javaScriptAnswers.A4[i];
        optionBtnArr[i].setAttribute("class", "btn-option");
        quizQuestionEl.appendChild(optionBtnArr[i]);
      }
      //quizQuestionEl.appendChild(nextQuestionBtnEl);
      break;
    case javaScriptQuestions[4]:
      for (let i = 0; i < javaScriptAnswers.A5.length; i++) {
        optionBtnArr[i].textContent = javaScriptAnswers.A5[i];
        optionBtnArr[i].setAttribute("class", "btn-option");
        quizQuestionEl.appendChild(optionBtnArr[i]);
      }
      //quizQuestionEl.appendChild(nextQuestionBtnEl);
      break;
    case javaScriptQuestions[5]:
      for (let i = 0; i < javaScriptAnswers.A6.length; i++) {
        optionBtnArr[i].textContent = javaScriptAnswers.A6[i];
        optionBtnArr[i].setAttribute("class", "btn-option");
        quizQuestionEl.appendChild(optionBtnArr[i]);
      }
      //quizQuestionEl.removeChild(nextQuestionBtnEl);
      // quizQuestionEl.appendChild(endButtonEl);
      break;
    default:
  }
}

// used to add the question to DOM, this can potentially be added to the start button event
function initialQuestion() {
  chooseQuestion();
  quizQuestionEl.appendChild(questionEl);
  addOptionBtn();
  quizQuestionEl.removeChild(startButtonEl);
}

function endQuiz() {
  quizQuestionEl.removeChild(questionEl);
  quizQuestionEl.removeChild(optionBtnAEl);
  quizQuestionEl.removeChild(optionBtnBEl);
  quizQuestionEl.removeChild(optionBtnCEl);
  quizQuestionEl.removeChild(optionBtnDEl);
  quizQuestionEl.appendChild(endQuizEl);
  quizQuestionEl.appendChild(displayScoreEl);
  // quizQuestionEl.removeChild(endButtonEl);
  quizQuestionEl.appendChild(userNameEl);
  quizQuestionEl.appendChild(submitBtnEl);
}

var saveTasks = function() {
  localStorage.setItem(userName, JSON.stringify(yourScore));
}

submitBtnEl.onclick = () => {
  userName = document.getElementById("user-name").value;
  console.log(userName);
  saveTasks();
}

startButtonEl.addEventListener("click", initialQuestion);

nextQuestionBtnEl.addEventListener("click", chooseQuestion);

// questionEl.addEventListener("click", chooseQuestion);

// endButtonEl.addEventListener("click", endQuiz);

optionBtnAEl.onclick = () => {
  switch (questionEl.textContent) {
    case javaScriptQuestions[3]:
    case javaScriptQuestions[4]:
      optionBtnAEl.setAttribute("class", "correct-choice");
      yourScore += 10;
      displayScoreEl.textContent = `${yourScore}`;
      setTimeout(chooseQuestion, 500);
      break;
    case javaScriptQuestions[5]:
      optionBtnAEl.setAttribute("class", "correct-choice");
      yourScore += 10;
      displayScoreEl.textContent = `${yourScore}`;
      setTimeout(endQuiz, 500);
      break;
    default:
      optionBtnAEl.setAttribute("class", "incorrect-choice");
      setTimeout(chooseQuestion, 500);
  }
};

optionBtnBEl.onclick = () => {
  switch (questionEl.textContent) {
    case javaScriptQuestions[1]:
    case javaScriptQuestions[2]:
      optionBtnBEl.setAttribute("class", "correct-choice");
      yourScore += 10;
      displayScoreEl.textContent = `${yourScore}`;
      setTimeout(chooseQuestion, 500);
      break;
    case javaScriptQuestions[5]:
      optionBtnBEl.setAttribute("class", "incorrect-choice");
      setTimeout(endQuiz, 500);
    default:
      optionBtnBEl.setAttribute("class", "incorrect-choice");
      setTimeout(chooseQuestion, 500);
  }
};

optionBtnCEl.onclick = () => {
  switch (questionEl.textContent) {
    case javaScriptQuestions[5]:
      optionBtnCEl.setAttribute("class", "incorrect-choice");
      setTimeout(endQuiz, 500);
    default:
      optionBtnCEl.setAttribute("class", "incorrect-choice");
      setTimeout(chooseQuestion, 500);
  }
};

optionBtnDEl.onclick = () => {
  switch (questionEl.textContent) {
    case javaScriptQuestions[0]:
      optionBtnDEl.setAttribute("class", "correct-choice");
      yourScore += 10;
      displayScoreEl.textContent = `${yourScore}`;
      setTimeout(chooseQuestion, 500);
      break;
    case javaScriptQuestions[5]:
      optionBtnDEl.setAttribute("class", "incorrect-choice");
      setTimeout(endQuiz, 500);
    default:
      optionBtnDEl.setAttribute("class", "incorrect-choice");
      setTimeout(chooseQuestion, 500);
  }
};


