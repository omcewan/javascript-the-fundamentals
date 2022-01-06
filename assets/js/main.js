// array variable of questions
var javaScriptQuestions = [
  "Question 1: Which of the following is correct?",
  "Question 2: Can you pass an anonymous function as an argument to another function?",
  "Question 3: Which built-in method combines the text of two strings and returns a new string?",
  "Question 4: Which built-in method returns the calling string value converted to upper case?",
  "Question 5: Which of the following function of Boolean object returns the primitive value of the Boolean object?",
  "Question 6: Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?",
];

// will be an array or an object variable with the options for the quiz
var javaScriptAnswers = [
  {
    Q1A: [
      "JavaScript is a lightweight, interpreted programming language.",
      "JavaScript has object-oriented capabilities that allows you to bulid interactivity into otherwise static HTML pages.",
      "The generalpurpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.",
      "All of the above.",
    ],
  },
  { Q2A: ["true", "false", "This question", "will change"] },
  { Q3A: ["append()", "concat()", "attach()", "None of the above"] },
  { Q4A: ["toUpperCase()", "toUpper()", "changeCase()", "None of the above"] },
  { Q5A: ["toSource()", "valueOf()", "toString()", "None of the above"] },
  { Q6A: ["unshift()", "sort()", "splice()", "toString()"] },
];

//this is how we will access the elements in the questions array!
console.log(javaScriptQuestions[0]);

// this is how we will access element in the answers array! I might change the internal elements to an array and remove the object!
console.log(javaScriptAnswers[0].Q1A[0]);

// function to go through questions
function chooseQuestion() {
  switch (questionEl.textContent) {
    case "":
      questionEl.textContent = javaScriptQuestions[0];
      addOptionBtn();
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

// variables for buttons put theses in an array to all for adding
var optionAEl = document.createElement("button");
optionAEl.setAttribute("class", "btn-option");

var optionBEl = document.createElement("button");
optionBEl.setAttribute("class", "btn-option");

var optionCEl = document.createElement("button");
optionCEl.setAttribute("class", "btn-option");

var optionDEl = document.createElement("button");
optionDEl.setAttribute("class", "btn-option");

var optionArr = [optionAEl, optionBEl, optionCEl, optionDEl];

// function to add option
function addOptionBtn() {
  for (let i = 0; i < optionArr.length; i++) {
    quizQuestionEl.appendChild(optionArr[i]);
  }
}

//this is the selector for the element where the questions will be displayed
var quizQuestionEl = document.querySelector(".questions");
console.log(quizQuestionEl);

// this div will have the questions popup
var questionEl = document.createElement("p");
console.log(questionEl);

// place the content in element
// quizElement.textContent = javaScriptQuestions[0];
// console.log(element)

// used to add the question to DOM, this can potentially be added to the start button event
function initialQuestion() {
  //chooses the first question
  chooseQuestion();

  //appends the questionElement
  quizQuestionEl.appendChild(questionEl);
  console.log(quizQuestionEl);

  addOptionBtn();

  quizQuestionEl.appendChild(nextQuestionBtn);
  console.log(quizQuestionEl);

  quizQuestionEl.removeChild(startButtonEl);
}

// selects the start button
var startButtonEl = document.querySelector("#btn-start");

// start game by adding first question and removing start button
startButtonEl.addEventListener("click", initialQuestion);

//this will add a next question button
var nextQuestionBtn = document.createElement("button");
console.log(nextQuestionBtn);

//add a class to the next question button
nextQuestionBtn.setAttribute("id", "btn-next");
console.log(nextQuestionBtn);

//add context to the button
nextQuestionBtn.textContent = "Next Question";

//bring up the next question
nextQuestionBtn.addEventListener("click", chooseQuestion);
