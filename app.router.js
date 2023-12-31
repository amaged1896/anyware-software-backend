import announcementRouter from "./src/modules/announcement/announcement.router.js";
import authRouter from "./src/modules/auth/auth.router.js";
import { AppError } from "./src/utils/appError.js";
import quizRouter from './src/modules/quiz/quiz.router.js';
import globalErrorHandler from './src/modules/error/errorController.js';
import cors from 'cors';
export const appRouter = (app, express) => {
    // Global Middleware 
    app.use(express.json());

    app.use(cors());
    // auth
    app.use('/api/v1/auth', authRouter);

    // announcements
    app.use('/api/v1/announcement', announcementRouter);

    // quiz
    app.use('/api/v1/quiz', quizRouter);

    // not found page router
    app.use('*', (req, res, next) => {
        next(new AppError(`can't find this route: ${req.originalUrl}`, 404));
    });
    // global error handling middleware
    app.use(globalErrorHandler);
};