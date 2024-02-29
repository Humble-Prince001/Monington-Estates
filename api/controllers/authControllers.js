import User from '../models/userModels.js';
import bcryptjs from 'bcryptjs';
import {errorHandler } from '../utilities/error.js';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10); 
    const newUser = new User({ username, email, password: hashedPassword });
       try {
            await newUser.save()
            res.status(201).json('user created successfully!')

    }  catch (error) {
        next(errorHandler(550,'error from the function'));
    }
};