//URL example https://www.google.com

//protocols
// https hypertext transfer protocol secure
// http hypertext transfer protocol

const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    
    // Avoid favicon.ico requests - browsers automatically request this
    if(req.url === '/favicon.ico') return res.end();
    
    fs.appendFile('./logs.txt', `${Date.now()}: new request on path => ${req.url} \n`, (err) =>{});

    const myUrl = url.parse(req.url, true); // true to parse query string into an object
    console.log(myUrl);
    switch(myUrl.pathname) {
        case '/':  
            res.end('you are at the root node');
            break;
        case '/about':
            if(myUrl.query.myName) {
                res.end(`Hello ${myUrl.query.myName}, welcome to the about page!`);
            }
            res.end('Hello! my name is Prateek');
            break;
        // mimicking case how youtube may search it's query https://www.youtube.com/results?search_query=java+script
        case '/results':
            res.end('here are your results for ' + myUrl.query.search_query);
            break;
        default:
            res.end('404! page not found');
            break; 
    }
});

myServer.listen(8000, () => {
    console.log('server started on port 8000');
});