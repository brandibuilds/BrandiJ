//DOM//
const correctAnswers = {
  question1: "web server",
  question2: "event driven",
  question3: "1990"
};

const quizForm = document.getElementById("quizForm");
const resultDisplay = document.getElementById("results");

quizForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(quizForm);
  let score = 0;
  const totalQuestions= Object.keys(correctAnswers).length;

  for(let question in correctAnswers) {
    const userAnswer = formData.get(question);
    const textInput = document.querySelector(`input[name="${question}"][type="text"]`);
    const selectedOption = document.querySelector(`input[name="${question}"]:checked`);

    if (userAnswer) {
      const cleanedAnswer = userAnswer.trim().toLowerCase();

      if (correctAnswer[question].includes(cleanedAnswer)) {score++;}
    }
    if (selectedOption && selectedOption.value === correctAnswers[question]) {score++;}
     else if (textInput && textInput.value.trim().toLowerCase() === correctAnswers[question]) {score++;}
}

  const percentage = Math.round((score / 3) * 100);
  resultDisplay.innerText= `Score: ${score}/(${percentage}%)`;
}); 
      

  

  
  
