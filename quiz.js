//answers-scoring//
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
//gets the users answers from the form//
const quizForm = document.getElementById("quizForm");
const resultDisplay = document.getElementById("results");

quizForm.addEventListener("submit", function(event) {
  event.preventDefault();//stops the page from regreshing//

  clearInterval(countdown);

  let timeUsed = 600 - seconds;

  let minutesSpent = Math.floor(timeUsed / 60);
  let secondsSpent = timeUsed % 60;

  document.getElementById("timeSpent").innerText = "Time Spent: " + minutesSpent + "minutes" + secondsSpent + "seconds";

  const formData = new FormData(quizForm);
  let score = 0;
  let questionResults = " ";
  
  const totalQuestions= Object.keys(correctAnswers).length;
  
//loops through the question and answers//
  for(let question in correctAnswers) {
    const textInput = document.querySelector(`input[name="${question}"][type="text"]`);
    const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
    const selectedCheckboxes = Array.from(document.querySelectorAll(`input[name="${question}"][type="checkbox"]:checked`)).map(input => input.value);

    let userAnswer = "No Answer";
    let isCorrect = false;
//compares the users selections against the correctanswers adds a point if they match//
    if (selectedOption && selectedOption.value === correctAnswers[question]) {score++;}
     else if (textInput && textInput.value.trim().toLowerCase() === correctAnswers[question]) {score++;}
     else if (Array.isArray(correctAnswers)) { userAnswer = selectedCheckboxes.join(",") || "No Answer";
                                              isCorrect=
                                                selectedCheckboxes.length == correctAnswers.length &&
                                                correctAnswers.every(answer => selectedCheckboxes.includes(answer));
}
  if (isCorrect) {score++;}
  }
  questionResults +=
    <p><strong>${question}</strong></p>
    <p>Your Answer: ${userAnswer}</p>
    <p>Correct Answer: ${Array.isArray(correctAnswers)
                         ? correctAnswers.join(",")
                         : correctAnswers}</p>
    <p>${isCorrect ? "Correct!" : "Incorrect"}</p><hr>;
}
  
  const percentage = Math.round((score / 10) * 100); //score//
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
  
  let mins= Math.floor(seconds / 60);
  let secs= seconds % 60;
  
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


  
  

  
  
