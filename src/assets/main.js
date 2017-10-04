let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let messageLabel = document.getElementById('message');


function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value == '' || attempt.value == ''){
      setHiddenFields();
    }

      if(!validateInput(input.value))
      {
        return;
      }
      attempt.value++;

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



function getResults(input){
  let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';

  for(i = 0; i< input.length; i++)
  {
    if(input.charAt(i) == answer.value.charAt(i) )
    {
      html += '<span class="glyphicon glyphicon-ok"></span>';
    }
    else if(answer.value.indexOf(input.charAt(i) > -1))
    {
      html += '<span class="glyphicon glyphicon-transfer"></span>';
    }
    else
      {
        html += '<span class="glyphicon glyphicon-remove"></span>';
      }
    }
    html += '</div></div>'
    document.getElementById('results').innerHTML += html;

    if(input == answer.value)
    {
      return true;
    }
    return false;
  }
