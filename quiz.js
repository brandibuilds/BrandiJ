//DOM//
const correctAnswers = {
  question1: "web server",
  question2: "event driven",
  question3: "1990",
  question4: "Open Source Software",
  question5: "Tim Berners-Lee",
  question6: "Changes a website name into an IP address",
  question7: "w3c",
  question8: "processing",
  question9: "url",
  question10: ["proprietary","1995","security"]
};

const quizForm = document.getElementById("quizForm");
const resultDisplay = document.getElementById("results");

quizForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(quizForm);
  let score = 0;
  const totalQuestions= Object.keys(correctAnswers).length;

  for(let question in correctAnswers) {
    const textInput = document.querySelector(`input[name="${question}"][type="text"]`);
    const selectedOption = document.querySelector(`input[name="${question}"]:checked`);

    if (selectedOption && selectedOption.value === correctAnswers[question]) {score++;}
     else if (textInput && textInput.value.trim().toLowerCase() === correctAnswers[question]) {score++;}
}
  const percentage = Math.round((score / 10) * 100);
  let finalresults;
    if (percentage >= 60) {
      finalresults = "Pass";
    } else {
      finalresults = "Fail";
    }
  document.getElementById("pass/fail").innerHTML = finalresults;
  resultDisplay.innerText= `Score: ${score}/${totalQuestions}(${percentage}%)`;
}); 
      
let seconds = 600;
function updateTimer(){
  const timer= document.getElementById('timer');
  
  let mins= Math.floor(seconds / 60)
  let secs= Math.floor(seconds % 60);
  
  timer.textContent=
    String(mins).padStart(2,"0") + ":"+
    String(secs).padStart(2,"0");
  
  if(seconds > 0) {
    seconds--;
  } else {
    clearInterval(countdown);
    alert("Time's Up!");
  }
}
updateTimer();
const countdown = setInterval(updateTimer, 1000);
  
  

  
  
