function checkEmail() {
    try{
        var p = $('#form-email').val();
        var newemailregexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        // var regularexpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (newemailregexp.test(p)){
            alert("Valid email");
            return true;
        }
        else {
            alert("Invalid email address");  
            return false;
        }
    } catch (e) {
       alert(e.message);
    }                          
}

function isPasswordValid() {
    var pass = $('#form-password').val();
    if(pass.length == 0 || pass.length < 4 || pass.length > 15) {
        alert ("Password is too short");
        return false;
    } else{
        return true;
    }
}

function isPlayerOfAge() {
    var age = $('#ageOfPlayer').val();
    if(age < 16) {
        alert ("Player is not eligible to play");  
        return false;
    }else {
        return true;
    }
}

function progressToInstructionPage() {
    var email = checkEmail();
    var password = isPasswordValid();
    var player = isPlayerOfAge();
    var validationError = document.getElementsByClassName('sign-up-form');
 
     if (email == true && player == true && password == true) {
        window.location.href = './game.html';
    } else
    alert ("There is a validation error");
    

}

document.querySelector('#instructionButton').addEventListener('click', () => {
    window.location.href = './instructionPage.html';
});

//const question = document.querySelector('question');
