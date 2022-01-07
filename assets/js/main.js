// an array consisting of questions
var javaScriptQuestions = [
  "Question 1: Which of the following is correct?",
  "Question 2: Which of the following type of variable is visible only within a function where it is defined?",
  "Question 3: Which built-in method combines the text of two strings and returns a new string?",
  "Question 4: Which built-in method returns the calling string value converted to upper case?",
  "Question 5: Which of the following function of Boolean object returns the primitive value of the Boolean object?",
  "Question 6: Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?",
];

// an array consisting of the answers
var javaScriptAnswers = [
  ["JavaScript is a lightweight, interpreted programming language.","JavaScript has object-oriented capabilities that allows you to bulid interactivity into otherwise static HTML pages.","The general purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.","All of the above.",],
  ["Gobal Variable", "Local Variable", "Both of the Above", "None of the Above"],
  ["append()", "concat()", "attach()", "None of the above"],
  ["toUpperCase()", "toUpper()", "changeCase()", "None of the above"],
  ["toSource()", "valueOf()", "toString()", "None of the above"],
  ["unshift()", "sort()", "splice()", "toString()"]
];

// object answer key
var answerKey = {
  Q1: javaScriptAnswers[0][3],
  Q2: javaScriptAnswers[1][1],
  Q3: javaScriptAnswers[2][1],
  Q4: javaScriptAnswers[3][0],
  Q5: javaScriptAnswers[4][0],
  Q6: javaScriptAnswers[5][0],
}

// check the answer key
console.log(answerKey.Q1);

//this is how we will access the elements in the questions array!
console.log(javaScriptQuestions[0]);

// this is how we will access element in the answers array! I might change the internal elements to an array and remove the object!
console.log(javaScriptAnswers[0][0]);

var optionAEl = document.createElement("button");
optionAEl.setAttribute("class", "btn-option");

var optionBEl = document.createElement("button");
optionBEl.setAttribute("class", "btn-option");

var optionCEl = document.createElement("button");
optionCEl.setAttribute("class", "btn-option");

var optionDEl = document.createElement("button");
optionDEl.setAttribute("class", "btn-option");

// variables for buttons put theses in an array to all for adding
var optionArr = [optionAEl, optionBEl, optionCEl, optionDEl];

//this is the selector for the element where the questions will be displayed
var quizQuestionEl = document.querySelector(".questions");
console.log(quizQuestionEl);

// this div will have the questions popup
var questionEl = document.createElement("p");
console.log(questionEl);

// selects the start button
var startButtonEl = document.querySelector("#btn-start");

//this will add a next question button
var nextQuestionBtn = document.createElement("button");
console.log(nextQuestionBtn);

//add a class to the next question button
nextQuestionBtn.setAttribute("id", "btn-next");
console.log(nextQuestionBtn);

//add context to the button
nextQuestionBtn.textContent = "Next Question";

// function to go through questions
function chooseQuestion() {
  switch (questionEl.textContent) {
    case "":
      questionEl.textContent = javaScriptQuestions[0];
      addOptionBtn();
      quizQuestionEl.appendChild(nextQuestionBtn);
      console.log(quizQuestionEl);
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
    default:
      alert("No more questions!");
  }
}

// function to add option
function addOptionBtn() {
  switch(questionEl.textContent) {
    case javaScriptQuestions[0]:
      optionArr[0].textContent = javaScriptAnswers[0][0];
      quizQuestionEl.appendChild(optionArr[0]);
      optionArr[1].textContent = javaScriptAnswers[0][1];
      quizQuestionEl.appendChild(optionArr[1]);
      optionArr[2].textContent = javaScriptAnswers[0][2];
      quizQuestionEl.appendChild(optionArr[2]);
      optionArr[3].textContent = javaScriptAnswers[0][3];
      quizQuestionEl.appendChild(optionArr[3]);
      quizQuestionEl.appendChild(nextQuestionBtn);
      break;
    case javaScriptQuestions[1]:
      optionArr[0].textContent = javaScriptAnswers[1][0];
      quizQuestionEl.appendChild(optionArr[0]);
      optionArr[1].textContent = javaScriptAnswers[1][1];
      quizQuestionEl.appendChild(optionArr[1]);
      optionArr[2].textContent = javaScriptAnswers[1][2];
      quizQuestionEl.appendChild(optionArr[2]);
      optionArr[3].textContent = javaScriptAnswers[1][3];
      quizQuestionEl.appendChild(optionArr[3]);
      quizQuestionEl.appendChild(nextQuestionBtn);
      break;
    case javaScriptQuestions[2]:
      optionArr[0].textContent = javaScriptAnswers[2][0];
      quizQuestionEl.appendChild(optionArr[0]);
      optionArr[1].textContent = javaScriptAnswers[2][1];
      quizQuestionEl.appendChild(optionArr[1]);
      optionArr[2].textContent = javaScriptAnswers[2][2];
      quizQuestionEl.appendChild(optionArr[2]);
      optionArr[3].textContent = javaScriptAnswers[2][3];
      quizQuestionEl.appendChild(optionArr[3]);
      quizQuestionEl.appendChild(nextQuestionBtn);
      break;
    case javaScriptQuestions[3]:
      optionArr[0].textContent = javaScriptAnswers[3][0];
      quizQuestionEl.appendChild(optionArr[0]);
      optionArr[1].textContent = javaScriptAnswers[3][1];
      quizQuestionEl.appendChild(optionArr[1]);
      optionArr[2].textContent = javaScriptAnswers[3][2];
      quizQuestionEl.appendChild(optionArr[2]);
      optionArr[3].textContent = javaScriptAnswers[3][3];
      quizQuestionEl.appendChild(optionArr[3]);
      quizQuestionEl.appendChild(nextQuestionBtn);
      break;
    case javaScriptQuestions[4]:
      optionArr[0].textContent = javaScriptAnswers[4][0];
      quizQuestionEl.appendChild(optionArr[0]);
      optionArr[1].textContent = javaScriptAnswers[4][1];
      quizQuestionEl.appendChild(optionArr[1]);
      optionArr[2].textContent = javaScriptAnswers[4][2];
      quizQuestionEl.appendChild(optionArr[2]);
      optionArr[3].textContent = javaScriptAnswers[4][3];
      quizQuestionEl.appendChild(optionArr[3]);
      quizQuestionEl.appendChild(nextQuestionBtn);
      break;
    case javaScriptQuestions[5]:
      optionArr[0].textContent = javaScriptAnswers[5][0];
      quizQuestionEl.appendChild(optionArr[0]);
      optionArr[1].textContent = javaScriptAnswers[5][1];
      quizQuestionEl.appendChild(optionArr[1]);
      optionArr[2].textContent = javaScriptAnswers[5][2];
      quizQuestionEl.appendChild(optionArr[2]);
      optionArr[3].textContent = javaScriptAnswers[5][3];
      quizQuestionEl.appendChild(optionArr[3]);
      quizQuestionEl.appendChild(nextQuestionBtn);
      break;
  }
}

// used to add the question to DOM, this can potentially be added to the start button event
function initialQuestion() {
  //chooses the first question
  chooseQuestion();
  //appends the questionElement
  quizQuestionEl.appendChild(questionEl);
  // add the different choices
  addOptionBtn();
  // remove the start button
  quizQuestionEl.removeChild(startButtonEl);
}


// start game by adding first question and removing start button
startButtonEl.addEventListener("click", initialQuestion);

//bring up the next question
nextQuestionBtn.addEventListener("click", chooseQuestion);
