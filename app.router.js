import announcementRouter from "./src/modules/announcement/announcement.router.js";
import authRouter from "./src/modules/auth/auth.router.js";
import { AppError } from "./src/utils/appError.js";
import quizRouter from './src/modules/quiz/quiz.router.js';
import globalErrorHandler from './src/modules/error/errorController.js';

export const appRouter = (app, express) => {
    // Global Middleware 
    app.use(express.json());

    // CORS
    const whitelist = ["http://127.0.0.1:5500"];

    app.use((req, res, next) => {
        if (!whitelist.includes(req.header("origin"))) {
            return next(new AppError("Blocked By CORS!"));
        }
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "*");
        res.setHeader("Access-Control-Allow-Methods", "*");
        res.setHeader("Access-Control-Allow-Private-Networks", true);
    });

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