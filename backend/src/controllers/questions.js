import JsonDB from 'node-json-db';

const db = new JsonDB("questionsDataBase", true, false);

export function getAllQuestions(req, res) {
    const questions = db.getData('/questions');
    res.send(questions);
}

export function getQuestion(req, res) {
    const question = db.find('/questions', (item) => {
        return Number(item.id) === Number(req.params.id);
    });
    res.send(question);
}

export function addQuestion(req, res) {
    const question = {
        id: Date.now(),
        question: req.body.question,
        firstAnswer: req.body.firstAnswer,
        secondAnswer: req.body.secondAnswer,
        quantityFirstAnswers: 0,
        quantitySecondAnswers: 0
    };
    db.push('/questions[]', question, true);
    res.send(question);
}

export function updateQuestion(req, res) {
    const questions = db.getData('/questions');
    const question = db.find('/questions', (item) => {
        return Number(item.id) === Number(req.params.id);
    });
    question.question = req.body.question || question.question;
    question.firstAnswer = req.body.firstAnswer || question.firstAnswer;
    question.secondAnswer = req.body.secondAnswer || question.secondAnswer;
    db.delete(`/questions[${questions.indexOf(question)}]`);
    db.push('/questions[]', question);
    res.sendStatus(200);
}