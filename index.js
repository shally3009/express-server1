const express = require('express');
const { connectDB } = require('./db');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

console.log(`PORT: ${PORT}`);
console.log(`MONGO_URI: ${MONGO_URI}`);

app.listen(PORT, async () => {
    try {
        await connectDB(MONGO_URI);
        console.log(`Server running on port ${PORT}`);
    } catch (error) {
        console.error('Failed to connect to the database');
        console.error(error);
    }
});

app.get('/', (req, res) => {
    res.send('Hello World');
});