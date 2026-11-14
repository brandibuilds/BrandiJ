document.getElementById("wsquiz").addEventListener("submit",calculate);

function calculate(event) {
  event.preventDefault();

  let score = "0";
  let year = document.querySelector('input[name="year")]:checked');
  let software = document.querySelector('input[name="software")]:checked');
  let discovery = document.querySelector('input[name="discovery")]:checked');
  let answer1 = document.getElementById("ws").value.trim();
  let answer2 = document.getElementById("ed").value.trim();
  let microsoftiisAnswers= Array.from(document.querySelectorAll('input[name="microsoftiis"]:checked')).map(input => input.value);
  let answer3 = document.getElementById("url").value.trim();
  let browser = document.querySelector('input[name="browser")]:checked');
  let arch = document.querySelector('input[name="arch")]:checked');
  let answer4 = document.getElementById("w3c").value.trim();

  if(year && year.value==="1990"){score++;}
  if(software && software.value==="line-mode"){score++;}
  if(discovery && discovery.value==="TBL"){score++;}
  if(answer1==="web server"){score++;}
  if(answer2==="event driven"){score++;}
  let correctmicrosoftiis = ["isproprietary","1995true","securitytrue"];
  if(microsoftiis.length===correctmicrosoftiis.length && correctmicrosoftiis.every(answer => microsoftiis.includes(answer))){score++;}
  if(answer3==="url"){score++;}
  if(browser && browser.value==="url"){score++;}
  if(arch && arch.value==="process based"){score++;}
  if(answer4==="w3c"){score++;}

  let percentage = Math.round(score/10) * 100;
  "Score:" + score; 
}
  
  
