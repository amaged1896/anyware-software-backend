import announcementRouter from "./src/modules/announcement/announcement.router.js";
import authRouter from "./src/modules/auth/auth.router.js";
import { AppError } from "./src/utils/appError.js";
import quizRouter from './src/modules/quiz/quiz.router.js';

export const appRouter = (app, express) => {
    // Global Middleware 
    app.use(express.json());

    // auth
    app.use('/api/v1/auth', authRouter);

    // announcements
    app.use('/api/v1/announcement', announcementRouter);

    // task
    app.use('/api/v1/task', quizRouter);

    // not found page router
    app.all("*", (req, res, next) => {
        return next(new AppError('Page not found', 404));
    });
    // // global error handling middleware
    // app.use(globalErrorHandler);
};