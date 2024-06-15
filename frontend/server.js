const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = 3000;
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000';

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/hello', async (req, res) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/hello`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching message from backend' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Frontend server is running on http://localhost:${PORT}`);
});

