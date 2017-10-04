let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let messageLabel = document.getElementById('message');


function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value == '' || attempt.value == ''){
      setHiddenFields();
    }


        if(!validateInput(input)){
      return false;
    }
    {
      else attempt.value = attempt.value + 1;
    }

}

function setHiddenFields () {
    attempt.value = "0"
    answer.value = Math.floor(Math.random() * 10000).toString() ;

    while(answer.value.length < 4)
    {
      answer.value = "0" + answer.value;
    }
}

function setMessage(message){

    messageLabel.innerHTML = message;

}


function validateInput(input){

    if(input.length == 4){
          return true;
    }
    else{

      setMessage("Guesses must be exactly 4 characters long.");
      return false;
    }

}
