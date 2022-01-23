import express from "express";
import db from "./config/database.js"

const app = express();

try {
    await db.authenticate();
    console.log('Database connected');
} catch (error) {
    console.error('Connection error', error);
}

app.get('/', (req, res) => {
    res.send('Yow')
});

app.listen(5000, () => console.log('Server running at port 5000'));