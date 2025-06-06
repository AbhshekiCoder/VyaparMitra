import express from 'express' 
import login from '../Controllers/login.js';


const loginRoute = express.Router();

loginRoute.post('/',  login);

export default loginRoute;