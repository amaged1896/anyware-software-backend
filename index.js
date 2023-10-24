import express from 'express';
import { appRouter } from './app.router.js';
import { connection } from './database/dbConnection.js';
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
const app = express();

connection();

app.get('/', (req, res) => {
    res.json({ message: "Home Page" });
});

appRouter(app, express);
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`));