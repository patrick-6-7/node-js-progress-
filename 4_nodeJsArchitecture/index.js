const fs = require('fs');
const os = require('os');

console.log(os.cpus().length); // Number of CPU cores

console.log("Log 1\n");

// Synchronous file writing which means it is a blocking request
const result = fs.readFileSync("../3_fileHandling/contacts.txt", "utf-8");
console.log(result);

console.log("Log 2\n");

// asynchronous file writing which means it is a non-blocking request
fs.readFile("../3_fileHandling/contacts.txt", "utf-8", (err, data) => {
    if (err) console.error("Error reading file:", err);
    else console.log(data);
});

console.log("Log 3\n");

