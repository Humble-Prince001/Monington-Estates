import express from 'express'; 
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then (() => console.log('mongo connected')).catch((err) => console.log(err));

const app = express();

app.listen(3000, () => {
    console.log('server is running on port 3000');
    }
)


app.use('/api/user', userRouter)

