import express from 'express';

import dotenv from 'dotenv';
import path from 'path'
import MongoDBConnect from './config/MongoDBConnect.js';
import signupRoute from './Routes/signupRoute.js';
import loginRoute from './Routes/loginRoute.js';
import userRoute from './Routes/userRoute.js';
import resetPassword_Route from './Routes/resetPassword_Route.js';
import {fileURLToPath} from 'url'
import forget_Password_Route from './Routes/forget_Password_Route.js';
dotenv.config();
const app = express();

app.use(express.json());



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


MongoDBConnect();


app.use('/api/signup', signupRoute)
app.use('/api/login', loginRoute)
app.use('/api/user', userRoute)
app.use('/reset-password-form', express.static(path.join(__dirname, "views")));
app.use('/api/reset-password', resetPassword_Route)
app.use('/api/forget-password', forget_Password_Route)
app.listen(process.env.PORT||3000, ()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})