//for file handling we need a built-in-module called 'fs'

const fs = require('fs');


//synchronous file writing
// fs.writeFileSync("./test.txt", "hello, world"); 

//asynchronous file writing
// fs.writeFile("./test.txt", "hellow, world asynchronous", (err) => {}); 


//synchronous file reading returns the result 
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

//asynchronous file reading uses callback function to get the result and errors if any
let result;
fs.readFile("./contacts.txt", "utf-8", (err, data) => {
    if (err) console.log(err);
    else console.log(data);
});
console.log(result); //undefined because the file reading is asynchronous and this line executes before the callback    


fs.appendFileSync("./test.txt", "\nsynchronous append using appendFileSync");

