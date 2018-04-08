//Hides question section
function hideQuestionPage() {
$('.questionPage').hide();
}

//Hides final score
function hideFinalScore() {
  $('.final-score').hide();
}

//Questions and answers
const questions = [
  {'question' : 'What corporation did Pearl Jam boycott?',
   'allAnswers' : ['Ticketmaster', 'Montsano', 'Sony', 'StubHub'],
   'correctAnswer' : 1},
  {'question' : 'What year did Pearl Jam form?',
   'allAnswers' : ['1989', '1990', '1991', '1992'],
   'correctAnswer' : 2},
  {'question' : 'What is the band’s highest ranking song?',
   'allAnswers' : ['Sirens', 'Jeremy', 'Last Kiss', 'Alive'],
   'correctAnswer' : 3 },
  {'question' : 'The band decided not to make any music videos for which album?',
   'allAnswers' : ['Ten', 'Lightning Bolt', 'Vitalogy', 'Riot Act'],
   'correctAnswer' : 3 },
  {'question' : 'What is the name of the band\'s bass player?',
   'allAnswers' : ['Jeff Ament', 'Stone Gossard', 'Mike McCready', 'Matt Cameron'],
   'correctAnswer' : 1 },
  {'question' : 'The band members frequently refer to which band as one of their major influences?',
   'allAnswers' : ['The Doors', 'The Rolling Stones', 'Nirvana', 'The Who'],
   'correctAnswer' : 4 },
  {'question' : 'At which baseball field did the band debut its song "Lightning Bolt”?',
   'allAnswers' : ['Wrigley Field', 'Yankee Stadium', 'Fenway Park', 'Dodger Stadium'],
   'correctAnswer' : 1 },
  {'question' : 'A former member of which band told Eddie Vedder to audition for the fledgling version of Pearl Jam?',
   'allAnswers' : ['Red Hot Chili Peppers', 'Butthole Surfers', 'The Who', 'Audioslave'],
   'correctAnswer' : 1 },
  {'question' : 'What was the band\'s first tentative name?',
   'allAnswers' : ['Rusty Nuts', 'Grungeville', "Mookie Blaylock", 'Five Against One'],
   'correctAnswer' : 3 },
  {'question' : 'What other band does drummer Matt Cameron still play with?',
   'allAnswers' : ['Skin Yard', 'Alice in Chains', 'Soundgarden', 'Nirvana'],
   'correctAnswer' :3  },
  ];
  console.log(`The answer for number 5 is ${questions[4].correctAnswer}`);
  
//Score
let currentScore = 0;
console.log(`The current score is ${currentScore}`);
$('.js-currentScore').text(`Your current score is ${currentScore} out of 10`);
  
//Current question index
let currentQuestionIndex = 0;

//Display current question number
function displayCurrentQuestionNumber () {
  $('.js-questionNumber').text(`Question number ${currentQuestionIndex + 1} of 10`);
}

//Display current question
function displayCurrentQuestion() {
  let currentQuestion = questions[currentQuestionIndex].question;
  console.log(currentQuestion); 
  $('.js-quizQuestion').text(currentQuestion);
    console.log('displayCurrentQuestion has run');
  $('#next-button').hide();
  $('#submit-button').show();
}
  
//Display current answers in HTML
function displayCurrentAnswers() {
  //refactor chalenge: turn the 4 questions into a loop. 
//   console.log(questions[currentQuestionIndex].allAnswers.length);
//   for (i = 0; i < questions[currentQuestionIndex].allAnswers.length; i++) { 
//     $('.js-answerChoice[i+1]').text(questions[currentQuestionIndex].allAnswers[i]);
//   }
// }
  $('.js-answerChoice1').text(questions[currentQuestionIndex].allAnswers[0]);
  $('.js-answerChoice2').text(questions[currentQuestionIndex].allAnswers[1]);
  $('.js-answerChoice3').text(questions[currentQuestionIndex].allAnswers[2]);
  $('.js-answerChoice4').text(questions[currentQuestionIndex].allAnswers[3]);
}

//Submit button action
$(".questionPageForm").submit(event => {
    event.preventDefault();
    let correctAnswer = questions[currentQuestionIndex].correctAnswer; 
		let userResponse = $("input[type=radio]:checked").val();
	  if (userResponse == correctAnswer) {
	    console.log('sweet!');
	    currentScore++;
	    console.log(`The current score is ${currentScore}`);
	    $('.js-currentScore').text(`Your current score is ${currentScore}`);
	    correctAnswerResponse();
    } else {
      console.log('crap!');
      wrongAnswerResponse();
    }
    $('#next-button').show();
    $('#submit-button').hide();
});

//Correct answer response
function correctAnswerResponse() {
  $('<p>Correct! Nice job! You\'re ready for the next question.</p>').appendTo('.js-feedbackSection');
}

//Incorrect answer response
function wrongAnswerResponse() {
  $(`<p>Sorry, that is incorrect. The correct answer is ${questions[currentQuestionIndex].correctAnswer}.</p>`).appendTo('.js-feedbackSection');
}

//Next button action
$("#next-button").on("click", function(event) {
    event.preventDefault();
    nextQuestion(); 
});

//Start button action
$('#start-button').on('click', function(event) {
  event.preventDefault();
  $('.questionPage').show();
  $('.intro').hide();
  doQuiz();
});

//Next question action
function nextQuestion() {
  $('.js-feedbackSection').empty(); 
  if([currentQuestionIndex] < questions.length-1) {
    currentQuestionIndex++;
    console.log(currentQuestionIndex);
    console.log('Next question function has run');
    displayCurrentQuestion();
    displayCurrentAnswers();
    displayCurrentQuestionNumber();
  } else {
    hideQuestionPage();
    $('.final-score').show();
    $(`<p>Your final score was ${currentScore} out of 10.</p>
        <button id="restart-button"><span class="button-label">Take the quiz again</span>
        </button>`).appendTo('.final-score');
    console.log('End of quiz');
  }
}

//Restart button action
$('#restart-button').on('click', function(event) {
    event.preventDefault();
    restartQuiz(); 
});

//Start quiz
function doQuiz() {
  displayCurrentQuestion();
  displayCurrentAnswers();
  displayCurrentQuestionNumber();
}

//Restart quiz
function restartQuiz() {
  console.log('Restart quiz has run');
  // let currentScore = 0;
  // let currentQuestionIndex = 0;
  // hideQuestionPage();
  // hideFinalScore();
}

//Initially hides question and final score pages
hideQuestionPage();
hideFinalScore();


//END