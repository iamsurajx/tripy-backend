// server.js
import express from 'express';
import connectDB from './Config/db.js';
import AuthRoutes from "./Routes/Auth.routes.js";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

app.use('/auth', AuthRoutes);

app.get('/', (req, res)=>{
    res.send("ExpressJS Server is running...") 
 })

// Connect to the database
connectDB().then(() => {
    // Start the server only after successful connection
    app.listen(PORT, () => {
        console.log(`Live:  http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Failed to start server:', err);
});