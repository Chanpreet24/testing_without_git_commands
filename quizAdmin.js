var questions = [
    {
        question: "what is 2 + 2",
        choice1: '1',
        choice2: '4',
        choice3: '7',
        choice4: '10',
        answer: 2,
    },
    {
        question: "who won europa league in 2021",
        choice1: 'chels',
        choice2: 'utd',
        choice3: 'Spurs',
        choice4: 'villareal',
        answer: 4,
    },
    {
        question: "Who won the PL",
        choice1: 'City',
        choice2: 'Utd',
        choice3: 'Arsenal',
        choice4: 'Spurs',
        answer: 1,
    },
    {
        question: "what year is it",
        choice1: '2021',
        choice2: '2222',
        choice3: '2023',
        choice4: '2022',
        answer: 1,
    },

    {
        question: "how old is Albert",
        choice1: '10',
        choice2: '20',
        choice3: '30',
        choice4: '30',
        answer: 20,
    },
];

questions.forEach(element => {
    element._id = element.question;
    db.put(element);
});