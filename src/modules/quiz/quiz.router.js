import express from 'express';
import { createQuiz, deleteQuiz, getAllQuiz, updateQuiz } from './quiz.controller.js';

const quizRouter = express.Router();


quizRouter.route("/")
    .get(getAllQuiz)
    .post(createQuiz);

quizRouter.route("/:id")
    .patch(updateQuiz)
    .delete(deleteQuiz);



export default quizRouter;