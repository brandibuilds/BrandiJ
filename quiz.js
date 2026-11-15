//DOM//
const correctAnswers = {
  question1: "web server",
  question2: "event driven",
  question3: "1990"
};

const form = document.getElementById("quizForm");
const form = document.getElementById("result");

quizForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let score = 0;
  const totalQuestions= Object.keys(correctAnswers).length;

  for(let question in correctAnswers) {
    const selectedOption = document.querySelector('input[name="${question}"]:checked');

    if (selectedOption && selectedOption.value === correctAnswers[question]) {score++};
  }

  const percentage = Math.round((score / 3) * 100);
  resultDisplay.innerText= 'Score: ' + score
});
  
      

  

  
  
