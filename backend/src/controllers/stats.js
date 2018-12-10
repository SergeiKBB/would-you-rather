import db from '../db';

export function getStats(req, res) {
    const question = db.find('/stats', (item) => {
        return Number(item.id) === Number(req.params.id);
    });
    res.send(question);
}

export function updateStats(req, res) {
    const questions = db.getData('/stats');
    let question = db.find('/stats', (item) => {
        return Number(item.id) === Number(req.params.id);
    });
    if (question) {
        question.firstAnswer += req.body.firstAnswer;
        question.secondAnswer += req.body.secondAnswer;
        db.delete(`/stats[${questions.indexOf(question)}]`);
        db.push('/stats[]', question)
    } else {
        question = {
            id: req.body.id,
            firstAnswer: req.body.firstAnswer,
            secondAnswer: req.body.secondAnswer
        };
        db.push('/stats[]', question)
    }
    res.sendStatus(200);
}