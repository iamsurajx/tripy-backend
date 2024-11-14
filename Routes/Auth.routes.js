import express from "express";


import { Signup, Login } from "../Controllers/Auth.controller.js";

import { signupValidation, loginValidation } from "../Middlewares/AuthValidation.middleware.js"
import { VerifyEmail } from "../Controllers/Auth.controller.js";


const AuthRoutes = express.Router();

AuthRoutes.post('/signup', Signup);
AuthRoutes.post('/login', Login);
AuthRoutes.post("/verify-email", VerifyEmail)

AuthRoutes.get('/', (req, res) => {
    res.send("ExpressJS Server is running...")
})

export default AuthRoutes;