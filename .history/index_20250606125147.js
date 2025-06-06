const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

// Root route
app.get('/', (req, res) => {
    res.send('Hello world!');
});

// About route
app.get('/about', (req, res) => {
    // res.send('This is the about page');
    res.sendFile(path.join(__filename, 'about.html'))
});

// Route to serve HTML file
app.get('/link', (req, res) => {
    res.sendFile(path.join(__filename, 'index.html'), (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(500).send('Something went wrong!');
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});
