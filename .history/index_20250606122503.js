const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) =>{
    
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);

    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1>This is node js code</h1> <p>Node js http server</p>');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1>This is about of node js code</h1> <p>Node js http server</p>');
    }
    else if(req.url == '/navbar'){
        res.statusCode = 200;
        const data = fs.readFileSync('navbar.html');
        res.end(data.toString());
    }
    else{
        res.statusCode = 404;
        res.end('<h1>Not Found </h1> <p>This is not available </p>');
    }
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})
