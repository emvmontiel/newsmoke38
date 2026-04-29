import express from "express";

const app = express(); // Create an express app

app.use(express.json());

// Import routes
import userRouter from './routes/user.route.js';

// Route declaration
app.use("/api/v1/users", userRouter);

export default app;