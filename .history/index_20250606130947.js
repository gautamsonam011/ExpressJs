const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

const myMiddleWare = (req, res, next)=>{
    console.log(req);
}
app.use(express.static(path.join(__dirname, "public")));
app.use(myMiddleWare)

// Root route
app.get('/', (req, res) => {
    res.send('Hello world!');
});

// About route
app.get('/about', (req, res) => {
    // res.send('This is the about page');
    // res.sendFile(path.join(__dirname, 'about.html'))
    res.json({"Name":"Sonam"})
});

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
