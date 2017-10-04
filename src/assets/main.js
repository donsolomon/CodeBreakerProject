let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let message = document.getElementById('message');


function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value == '' || attempt.value == ''){
      setHiddenFields();
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

    message.innerHTML = message;

}
