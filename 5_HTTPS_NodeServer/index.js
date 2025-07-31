const http = require('http');
const fs = require('fs');

let a = 0;
//this callback function manages the incoming requests and sends the coresponding respond to the client
const myServer = http.createServer((req, res)=>{
    fs.appendFile('./logs.txt', `${++a}. ${Date.now()}: new request recieved on path ${req.url}\n`, (err, data) =>{
        switch(req.url){
            case('/'): res.end('Home Page');
            break
            case('/about'): res.end('Hi my name is Prateek');
            break
            default: res.end('error 404 page not found');
        }
    });
}); 


//after creating my server i will start listning to the request made to my port number lets say 8000
myServer.listen(8000, ()=>{
    console.log('server started!');
})




