import express from 'express';
import { createQuiz, deleteQuiz, getAllQuiz, updateQuiz } from './quiz.controller.js';
import { isValid } from '../../middleware/validation.js';
import { createQuizSchema, updateQuizSchema } from './quiz.validation.js';
import { idSchema } from './../announcement/announcement.validation.js';

const quizRouter = express.Router();


quizRouter.route("/")
    .get(getAllQuiz)
    .post(isValid(createQuizSchema), createQuiz);

quizRouter.route("/:id")
    .patch(isValid(updateQuizSchema), updateQuiz)
    .delete(isValid(idSchema), deleteQuiz);



export default quizRouter;