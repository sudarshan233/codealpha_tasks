import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import router from './routes/taskRoutes.js';
import {connectDB} from "./config/database.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000
const __dirname = path.resolve()

connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/tasks', router);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    })

}
app.listen(PORT, (error) => {
    if(error) console.error(error);
    console.log(`Server is running on port ${PORT}`);
});