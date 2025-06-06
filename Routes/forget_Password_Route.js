import express from 'express'
import forgetPassword from '../Controllers/forgetPassword.js';

const forget_Password_Route = express.Router();

forget_Password_Route.post('/', forgetPassword);

export default forget_Password_Route;