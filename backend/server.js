import express from 'express';
import dotenv from 'dotenv';

import router from './routes/taskRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000

app.use('/api/tasks', router)

app.listen(PORT, (error) => {
    if(error) console.error(error);
    console.log(`Server is running on port ${PORT}`);
});