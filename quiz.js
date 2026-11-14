document.getElementById("wsquiz").addEventListener("submit",calculate)

function calculate()
{
  let score = "0";
  let year = document.querySelector('input[name="year")]:checked');
  let software = document.querySelector('input[name="software")]:checked');
  let discovery = document.querySelector('input[name="discovery")]:checked');
  let answer1 = document.getElementById("ws");
  let answer2 = document.getElementById("ed");
  let microsoftiisAnswers= Array.from(document.querySelectorAll('input[name="microsoftiis"]:checked')).map(input => input.value);
  
  
