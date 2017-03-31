var amountCorrect = 0.0;

function validateAnswer(){
  var answerEntered = document.getElementById('q1').value;
  var attempts = 0.0;
  if(answerEntered == 'B' || 'b'){
    if(attempts == 0){
    amountCorrect++;
    setCookie("aC", amountCorrect, 30);
    }
    attempts++;
  }

}

function validateAnswer1(){
  var answerEntered = document.getElementById('q2').value;
  var attempts = 0.0;
  if(answerEntered == 'U' || 'u'){
    if(attempts == 0){
    amountCorrect++;
    setCookie("aC", amountCorrect, 30);
    }
    attempts++;
  }

}

function validateAnswer2(){
  var answerEntered = document.getElementById('q3').value;
  var attempts = 0.0;
  if(answerEntered == 'T' || 't'){
    if(attempts == 0){
    amountCorrect++;
    setCookie("aC", amountCorrect, 30);
    }
    attempts++;
  }

}

function validateAnswer3(){
  var answerEntered = document.getElementById('q4').value;
  var attempts = 0.0;
  if(answerEntered == '45414'){
    if(attempts == 0){
    amountCorrect++;
    setCookie("aC", amountCorrect, 30);
    }
    attempts++;
  }
}

function validateAnswer4(){
  var answerEntered = document.getElementById('q5').value;
  var attempts = 0.0;
  if(answerEntered == '055'){
    if(attempts == 0){
    amountCorrect++;
    setCookie("aC", amountCorrect, 30);
  }
    attempts++;
  }
}

function validateAnswer5(){
  var answerEntered = document.getElementById('q6').value;
  var attempts = 0.0;
  if(answerEntered == '213'){
    if(attempts == 0){
    amountCorrect++;
    setCookie("aC", amountCorrect, 30);
    }
    attempts++;
  }
}

function validateAnswer6(){
  var answerEntered = document.getElementById('q7').value;
  var attempts = 0.0;
  if(answerEntered == 'X' || "x"){
    if(attempts == 0){
    amountCorrect++;
    setCookie("aC", amountCorrect, 30);
    }
    attempts++;
  }
}

function validateAnswer7(){
  var answerEntered = document.getElementById('q8').value;
  var attempts = 0.0;
  if(answerEntered == 'Y' || 'y'){
    if(attempts == 0){
    amountCorrect++;
    setCookie("aC", amountCorrect, 30);
    }
    attempts++;
  }
}

function validateAnswer8(){
  var answerEntered = document.getElementById('q9').value;
  var attempts = 0.0;
  if(answerEntered == 'T' || 't'){
    if(attempts == 0){
    amountCorrect++;
    setCookie("aC", amountCorrect, 30);
    }
    attempts++;
  }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function calculateResults(){
  var totalRight;
  totalRight = getCookie("preTax");
  console.log(totalRight);
  var percen = amountCorrect / 9;
  document.getElementById('sub').innerHTML = amountCorrect;
  document.getElementById('tot').innerHTML = percen;
}
