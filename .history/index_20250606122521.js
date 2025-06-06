const express = require('express');
const app = express();
const port = 4000

app.get('/', (req, res)=>{
    res.send('Hello world!');
})
app.get('/about', (req, res) =>{
    res.send('This is about page')
})
app.listen(port, ()=>{
    console.log(`Express app listening at http://localhost:${port}`);
})