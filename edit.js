//var db = new PouchDB ('quiz_Database');




function deletePlayer(){
    var playerToBeDeleted = $('#deletePlayer').val();
    db.get(playerToBeDeleted).then(function(doc){
        return db.remove(doc.id, doc.email);
    });
}

function deleteQuiz(){
    var playerToBeDeleted = $('#deleteQuiz').val();
    db.get(playerToBeDeleted).then(function(doc){
        return db.remove(doc.id, doc.email);
    });
}

document.querySelector('#edit-back-button').addEventListener('click', () => {
    window.location.href = './administratorGame.html';
});

