//HTTP Methods
// 1. GET is used to retrieve data from a server.
// 2. POST is used to send data to a server.(create new data)
// 3. PUT is used to put some data on our server to perform some tasks on it.(put a img on server and convert it to pdf)
// 4. PATCH is used to apply partial modifications to a resource.(updates already existing data)
// 5. DELETE is used to remove data from a server.(deleting data from the database)

const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    
    // Avoid favicon.ico requests - browsers automatically request this
    if(req.url === '/favicon.ico') return res.end();
    
    fs.appendFile('./logs.txt', `${Date.now()}: new ${req.method} request on path => ${req.url} \n`, (err) =>{});

    const myUrl = url.parse(req.url, true); // true to parse query string into an object
    
    switch(myUrl.pathname) {
        case '/':  
            res.end('you are at the root node');
            break;
        case '/about':
            if(myUrl.query.UserName){
                res.end(`Hello ${myUrl.query.UserName}, welcome to the about page!`);
                break;
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