import express from 'express';
import nameRoute from './routes/index.js';
// const express;
const app = express();
const port = 3000;

app.use(express.json());
app.use("", nameRoute)

app.listen(process.env.port || port, () => {
    console.log(`Server running on port: ${process.env.port || port}`);
});