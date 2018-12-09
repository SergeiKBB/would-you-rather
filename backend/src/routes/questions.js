import express from 'express';
import { addQuestion, getAllQuestions, getQuestion, updateQuestion } from '../controllers';

const questionsRoutes = express.Router();

questionsRoutes.route('/')
    .get(getAllQuestions)
    .post(addQuestion);
questionsRoutes.route('/:id')
    .get(getQuestion)
    .put(updateQuestion);

export default questionsRoutes;