const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

// Set Handlebars as the view engine
app.engine('handlebars', engine({
    defaultLayout: 'main', 
    extname: '.handlebars' 
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views')); 

// Static files
app.use(express.static(path.join(__dirname, 'static')));

// Routes
app.use('/', require(path.join(__dirname, 'routes/blogs')));

// Start server
app.listen(port, () => {
    console.log(`Blog app listening at http://localhost:${port}`);
});
