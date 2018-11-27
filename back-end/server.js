var express = require('express');
var bodyParser = require('body-parser');
var JsonDB = require('node-json-db');

var app = express();
var db = new JsonDB("questionsDataBase", true, false);

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/questions', (req, res) => {
  var questions = db.getData('/questions');
  res.send(questions);
});

app.get('/questions/:id', (req, res) => {
  var question = db.find('/questions', (item) => {
    return Number(item.id) === Number(req.params.id);
  });
  res.send(question);
});

app.post('/questions', (req, res) => {
  var question = {
    id: Date.now(),
    question: req.body.question,
    firstAnswer: req.body.firstAnswer,
    secondAnswer: req.body.secondAnswer,
    quantityFirstAnswers: 0,
    quantitySecondAnswers: 0
  };
  db.push('/questions[]', question, true);
  res.send(question);
});

app.put('/questions/:id', (req, res) => {
  var questions = db.getData('/questions');
  var question = db.find('/questions', (item) => {
    return Number(item.id) === Number(req.params.id);
  });
  question.question = req.body.question ? req.body.question : question.question;
  question.firstAnswer = req.body.firstAnswer ? req.body.firstAnswer : question.firstAnswer;
  question.secondAnswer = req.body.secondAnswer ? req.body.secondAnswer : question.secondAnswer;
  db.delete(`/questions[${questions.indexOf(question)}]`);
  db.push('/questions[]', question);
  res.sendStatus(200);
});

app.listen(4000,  () => {
  console.log('Example app listening on port 4000!');
});

