import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import router from './routes/taskRoutes.js';
import {connectDB} from "./config/database.js";

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

if(process.env.NODE_ENV !== 'production') {
    app.use(cors(
        {
            origin: "http://localhost:5173",
        }
    ))
}

connectDB();
app.use('/api/tasks', router);

if(process.env.NODE_ENV === 'production') {
    const frontendPath = path.join(__dirname, '../frontend/dist');
    app.use(express.static(frontendPath));
    app.get(/^\/(?!api).*/, (req, res) => {
        res.sendFile(path.join(frontendPath, 'index.html'));
    });
}

app.listen(PORT, (error) => {
    if(error) console.error(error);
    console.log(`Server is running on port ${PORT}`);
});