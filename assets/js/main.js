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

// have not used this in the code to this point. may be removed if not needed by the end of the coding
var answerKey = {
  Q1: javaScriptAnswers.A1[3],
  Q2: javaScriptAnswers.A2[1],
  Q3: javaScriptAnswers.A3[1],
  Q4: javaScriptAnswers.A4[0],
  Q5: javaScriptAnswers.A5[0],
  Q6: javaScriptAnswers.A6[0],
};

var yourScore = 0;

var userName;

var optionBtnAEl = document.createElement("button");
optionBtnAEl.setAttribute("class", "btn-option");
var optionBtnBEl = document.createElement("button");
optionBtnBEl.setAttribute("class", "btn-option");
var optionBtnCEl = document.createElement("button");
optionBtnCEl.setAttribute("class", "btn-option");
var optionBtnDEl = document.createElement("button");
optionBtnDEl.setAttribute("class", "btn-option");
var optionBtnArr = [optionBtnAEl, optionBtnBEl, optionBtnCEl, optionBtnDEl];

var displayQuizEl = document.querySelector(".questions");

var questionEl = document.createElement("p");

var startButtonEl = document.querySelector("#btn-start");

var displayScoreEl = document.createElement("p");
displayScoreEl.textContent = `${yourScore}`;

var endQuizEl = document.createElement("p");
endQuizEl.textContent = "Game Over! Here is how you did!";

var highScoreBtnEl = document.querySelector("#highscores");

var userNameEl = document.createElement("input");
userNameEl.setAttribute("type", "text");
userNameEl.setAttribute("placeholder", "Initials");
userNameEl.setAttribute("id", "user-name");
userNameEl.setAttribute("onfocus", "this.value=''");

var submitBtnEl = document.createElement("input");
submitBtnEl.setAttribute("type", "submit");

var timerEl = document.getElementById("timer");

var count = 90;
var timer;

function countDownTimer() {
  timerEl.innerHTML = `Time Left: ${count}`;
  count--;
  if (count === -1) {
    clearInterval(timer);
    timerEl.innerHTML = "Time's Up!";
    endQuiz();
  }
}

/* choose the question to display when the next button is clicked. the option buttons are added after the
question was chosen */
function chooseQuestion() {
  switch (questionEl.textContent) {
    case "":
      questionEl.textContent = javaScriptQuestions[0];
      addOptionBtn();
      //displayQuizEl.appendChild(nextQuestionBtnEl);
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
        displayQuizEl.appendChild(optionBtnArr[i]);
      }
      //displayQuizEl.appendChild(nextQuestionBtnEl);
      break;
    case javaScriptQuestions[1]:
      for (let i = 0; i < javaScriptAnswers.A2.length; i++) {
        optionBtnArr[i].textContent = javaScriptAnswers.A2[i];
        optionBtnArr[i].setAttribute("class", "btn-option");
        displayQuizEl.appendChild(optionBtnArr[i]);
      }
      //displayQuizEl.appendChild(nextQuestionBtnEl);
      break;
    case javaScriptQuestions[2]:
      for (let i = 0; i < javaScriptAnswers.A3.length; i++) {
        optionBtnArr[i].textContent = javaScriptAnswers.A3[i];
        optionBtnArr[i].setAttribute("class", "btn-option");
        displayQuizEl.appendChild(optionBtnArr[i]);
      }
      //displayQuizEl.appendChild(nextQuestionBtnEl);
      break;
    case javaScriptQuestions[3]:
      for (let i = 0; i < javaScriptAnswers.A4.length; i++) {
        optionBtnArr[i].textContent = javaScriptAnswers.A4[i];
        optionBtnArr[i].setAttribute("class", "btn-option");
        displayQuizEl.appendChild(optionBtnArr[i]);
      }
      //displayQuizEl.appendChild(nextQuestionBtnEl);
      break;
    case javaScriptQuestions[4]:
      for (let i = 0; i < javaScriptAnswers.A5.length; i++) {
        optionBtnArr[i].textContent = javaScriptAnswers.A5[i];
        optionBtnArr[i].setAttribute("class", "btn-option");
        displayQuizEl.appendChild(optionBtnArr[i]);
      }
      //displayQuizEl.appendChild(nextQuestionBtnEl);
      break;
    case javaScriptQuestions[5]:
      for (let i = 0; i < javaScriptAnswers.A6.length; i++) {
        optionBtnArr[i].textContent = javaScriptAnswers.A6[i];
        optionBtnArr[i].setAttribute("class", "btn-option");
        displayQuizEl.appendChild(optionBtnArr[i]);
      }
      //displayQuizEl.removeChild(nextQuestionBtnEl);
      // displayQuizEl.appendChild(endButtonEl);
      break;
    default:
  }
}

// used to add the question to DOM, also resets the DOM by removing all elements in the displayQuizEl before choosing the questions to display.
function initialQuestion() {
  while (displayQuizEl.firstChild) {
    displayQuizEl.removeChild(displayQuizEl.firstChild);
    questionEl.textContent = "";
    yourScore = 0;
    count = 90;
  }
  timer = setInterval(countDownTimer, 1000);
  chooseQuestion();
  displayQuizEl.appendChild(questionEl);
  addOptionBtn();
}

function endQuiz() {
  while (displayQuizEl.firstChild) {
    displayQuizEl.removeChild(displayQuizEl.firstChild);
  }
  displayQuizEl.appendChild(endQuizEl);
  displayQuizEl.appendChild(displayScoreEl);
  displayQuizEl.appendChild(userNameEl);
  displayQuizEl.appendChild(submitBtnEl);
  displayQuizEl.appendChild(startButtonEl);
  clearInterval(timer);
}

function saveHighScores() {
  localStorage.setItem(userName, JSON.stringify(yourScore));
}

submitBtnEl.onclick = () => {
  userName = document.getElementById("user-name").value;
  saveHighScores();
  while (displayQuizEl.firstChild) {
    displayQuizEl.removeChild(displayQuizEl.firstChild);
  }
  var displayScoreEl = document.createElement("ul");
  displayQuizEl.appendChild(displayScoreEl);

  var newHighScoreEl = document.createElement("li");

  for (let i = 0; i < Object.keys(localStorage).length; i++) {
    userName = Object.keys(localStorage)[i];
    newHighScoreEl.textContent =
      userName + ": " + localStorage.getItem(userName);
    displayScoreEl.innerHTML += " <li>" + newHighScoreEl.textContent + "</li>";
  }
  displayQuizEl.appendChild(startButtonEl);
};

highScoreBtnEl.onclick = () => {
  while (displayQuizEl.firstChild) {
    displayQuizEl.removeChild(displayQuizEl.firstChild);
    clearInterval(timer);
  }
  var displayScoreEl = document.createElement("ul");
  displayQuizEl.appendChild(displayScoreEl);

  var newHighScoreEl = document.createElement("li");

  for (let i = 0; i < Object.keys(localStorage).length; i++) {
    userName = Object.keys(localStorage)[i];
    newHighScoreEl.textContent =
      userName + ": " + localStorage.getItem(userName);
    displayScoreEl.innerHTML += " <li>" + newHighScoreEl.textContent + "</li>";
  }
  displayQuizEl.appendChild(startButtonEl);
};

startButtonEl.addEventListener("click", initialQuestion);

// nextQuestionBtnEl.addEventListener("click", chooseQuestion);

// potentially have to add the time options here where time is minus on wrong answers.
optionBtnAEl.onclick = () => {
  switch (questionEl.textContent) {
    case javaScriptQuestions[3]:
    case javaScriptQuestions[4]:
      optionBtnAEl.setAttribute("class", "correct-choice");
      yourScore += 10;
      displayScoreEl.textContent = `${yourScore}`;
      setTimeout(chooseQuestion, 350);
      break;
    case javaScriptQuestions[5]:
      optionBtnAEl.setAttribute("class", "correct-choice");
      yourScore += 10;
      displayScoreEl.textContent = `${yourScore}`;
      setTimeout(endQuiz, 350);
      break;
    default:
      optionBtnAEl.setAttribute("class", "incorrect-choice");
      count -= 10;
      setTimeout(chooseQuestion, 350);
  }
};

optionBtnBEl.onclick = () => {
  switch (questionEl.textContent) {
    case javaScriptQuestions[1]:
    case javaScriptQuestions[2]:
      optionBtnBEl.setAttribute("class", "correct-choice");
      yourScore += 10;
      displayScoreEl.textContent = `${yourScore}`;
      setTimeout(chooseQuestion, 350);
      break;
    case javaScriptQuestions[5]:
      optionBtnBEl.setAttribute("class", "incorrect-choice");
      setTimeout(endQuiz, 350);
    default:
      optionBtnBEl.setAttribute("class", "incorrect-choice");
      count -= 10;
      setTimeout(chooseQuestion, 350);
  }
};

optionBtnCEl.onclick = () => {
  switch (questionEl.textContent) {
    case javaScriptQuestions[5]:
      optionBtnCEl.setAttribute("class", "incorrect-choice");
      setTimeout(endQuiz, 350);
    default:
      optionBtnCEl.setAttribute("class", "incorrect-choice");
      count -= 10;
      setTimeout(chooseQuestion, 350);
  }
};

optionBtnDEl.onclick = () => {
  switch (questionEl.textContent) {
    case javaScriptQuestions[0]:
      optionBtnDEl.setAttribute("class", "correct-choice");
      yourScore += 10;
      displayScoreEl.textContent = `${yourScore}`;
      setTimeout(chooseQuestion, 350);
      break;
    case javaScriptQuestions[5]:
      optionBtnDEl.setAttribute("class", "incorrect-choice");
      setTimeout(endQuiz, 350);
    default:
      optionBtnDEl.setAttribute("class", "incorrect-choice");
      count -= 10;
      setTimeout(chooseQuestion, 250);
  }
};
