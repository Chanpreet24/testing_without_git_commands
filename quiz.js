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

function progressToQuizPage() {
    var email = checkEmail();
    var password = isPasswordValid();
    var player = isPlayerOfAge();
    var validationError = document.getElementsByClassName('sign-up-form');
 
     if (email == true && player == true && password == true) {
        var doc = {
            _id: $('#form-email').val(),
            name: $('#form-name').val(),
            email: $('#form-email').val(),
            password: $('#form-password').val()
           // userLevel: userLevel()
        };

        db2.put(doc,function(err,res){
            if(err){
                switch(err.message){
                    case 'Document update conflict':
                        alert("User already exists, please log in below");
                        window.location.href = './index.html';
                        break;
                    default:
                        window.location.href = './index.html';
                        break;
                }
            }else{
                alert(JSON.stringify(res));
            }
        });

        window.location.href = './game.html';
    } else
    alert ("There is a validation error");
    

}

function logInToQuiz(e){
    e.preventDefault();
    var email = $('#formLogin-email').val();
    var password = $('#formLogin-password').val();
    db2.createIndex({
        index: {fields: ['email', 'password']}
        }).then(function(){                         //.then contains a function block which allows us to find email and password based on the index created above.
        return db2.find({selector: {
            email: email,
            password: password
          }});
         }).then(function(res){
          console.log(JSON.stringify(res.docs[0]));
         });
    }

    $('#logInButton').on('click',logInToQuiz);

document.querySelector('#UserLevelButton').addEventListener('click', () => {
    window.location.href = './UserLevel.html';
});

// const question = document.querySelector('question');
