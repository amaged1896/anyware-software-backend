
import { catchAsync } from './../../utils/catchAsync.js';
import { Quiz } from './../../../database/models/quiz.model.js';
import { AppError } from './../../utils/appError.js';

export const createQuiz = catchAsync(async (req, res, next) => {
    const quiz = await Quiz.create({
        course: req.body.course,
        topic: req.body.topic,
        dueTo: req.body.dueTo
    });
    return res.status(201).json({ status: "success", data: quiz });
});

export const updateQuiz = catchAsync(async (req, res, next) => {
    const quiz = await Quiz.findOne({ _id: req.params.id });
    if (!quiz) return next(new AppError("Quiz not found", 400));
    quiz.course = req.body.course,
        quiz.topic = req.body.topic,
        quiz.dueTo = req.body.dueTo;
    await quiz.save();
    return res.status(201).json({ status: "success", data: quiz });
});

export const deleteQuiz = catchAsync(async (req, res, next) => {
    const quiz = await Quiz.findByIdAndDelete(req.params.id);
    if (!quiz) return next(new AppError("Quiz not found", 400));
    return res.status(200).json({ status: "success", message: "quiz has been deleted successfully!", data: quiz });
});

export const getAllQuiz = catchAsync(async (req, res, next) => {
    const quizzes = await Quiz.find();
    return res.status(201).json({ status: "success", results: quizzes.length, data: quizzes });
});