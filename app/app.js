const express = require('express');
const app = express();

app.get('/a/tecneuralai', (req, res) => {
    res.send('Welcome to TecNeuralAI');
});

app.get('/a/htcai', (req, res) => {
    res.send('Welcome to HTCAI');
});

app.get('/', (req, res) => {
    res.send('Main App Running');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});