const express = require('express');
const app = express();
const path = express();
const port = 4000

app.get('/', (req, res)=>{
    res.send('Hello world!');
})
app.get('/about', (req, res) =>{
    res.send('This is about page')
})
app.get('/link', (req, res) =>{
    res.sendFile(path.join);
})
app.listen(port, ()=>{
    console.log(`Express app listening at http://localhost:${port}`);
})