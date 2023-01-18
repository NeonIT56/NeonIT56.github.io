function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex];
};

Quiz.prototype.guess = function (answer) {
  if (this.getQuestionIndex().isCorrectAnswer(answer)) {
    this.score++;
  }

  this.questionIndex++;
};

Quiz.prototype.isEnded = function () {
  return this.questionIndex === this.questions.length;
};

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
  return this.answer === choice;
};

function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show options
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  };
}

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML =
    "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  if (quiz.score == 5) {
    gameOverHTML +=
      "<h2 id='score'> Your scores: " +
      quiz.score +
      "<br />" +
      " You won 30% disscount</h2>" +
      "<br />" +
      "<h3> Here is your coupon: " +
      createCoupon(6) +
      "</h3>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
  } else if (quiz.score >= 3 && quiz.score <= 4) {
    gameOverHTML += gameOverHTML +=
      "<h2 id='score'> Your scores: " +
      quiz.score +
      "<br />" +
      " You won 15% disscount</h2>" +
      "<br />" +
      "<h3> Here is your coupon: " +
      createCoupon(6) +
      "</h3>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
  } else if (quiz.score < 3) {
    gameOverHTML +=
      "<h2 id='score'> Your scores: " +
      quiz.score +
      "<br />" +
      " You lost. Better luck next time</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
  }
}

function createCoupon(length) {
  var code = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    code += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return code;
}

var questions = [
  new Question(
    "1. Who won the first World Cup in football ?",
    ["Uruguay", "Yugoslavia", "United States", "Argentina"],
    "Uruguay"
  ),
  new Question(
    "2. Who has the most ATP titles ?",
    ["Novak Djokovic", "Roger Federer", "Rafael Nadal", "Andy Murray"],
    "Roger Federer"
  ),
  new Question(
    "3. When was Nike founded ?",
    ["1950", "1980", "1964", "1943"],
    "1964"
  ),
  new Question(
    "4. How far is the throw line in darts? ?",
    ["233.3cm", "237cm", "250cm", "210cm"],
    "237cm"
  ),
  new Question(
    "5. Longest Ski jump is...",
    ["253.5m", "210m", "312.3m", "280m"],
    "253.5m"
  ),
];

var quiz = new Quiz(questions);

populate();
