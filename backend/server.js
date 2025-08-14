import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import router from './routes/taskRoutes.js';
import {connectDB} from "./config/database.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000

connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/tasks', router);

app.listen(PORT, (error) => {
    if(error) console.error(error);
    console.log(`Server is running on port ${PORT}`);
});