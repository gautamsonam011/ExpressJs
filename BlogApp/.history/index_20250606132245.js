const express = require('express');
const path = require('path');
const app = express();
const port = 6000;

app.use(express.static(path.join(__dirname, "static")));


// Route to serve HTML file
app.get('/link', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'), (err) => {
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