## What I Learned Today

### 1. Creating a Simple Server
- We can create a simple server using the **`http`** built-in module
- Import it using: `const http = require('http');`

### 2. Server Creation Process
```javascript
const myServer = http.createServer((req, res) => {
    // Handle requests and responses here
});
```

**The callback function has two main parameters:**
1. **`req` (request)** - Contains information about the incoming request
2. **`res` (response)** - Used to send response back to the client

### 3. Key Request Properties
- **`req.url`** - The path/route that the client requested (e.g., '/', '/about')
- Used for routing to different pages/endpoints

### 4. Sending Responses
- **`res.end()`** - Sends response to the client machine and ends the connection
- Example: `res.end('Home Page')` sends "Home Page" text to browser

### 5. Starting the Server
```javascript
myServer.listen(8000, () => {
    console.log('server started!');
});
```
- **`server.listen()`** starts the server
- **First parameter**: Port number (8000 in our case)
- **Second parameter**: Callback function (runs when server starts)

### 6. Routing Implementation
Used **switch statement** to handle different URL paths:
- `/` → Home Page
- `/about` → About page with personal info
- **Default case** → 404 error for unknown routes

### 7. Logging Requests
- Used **`fs.appendFile()`** to log each request to `logs.txt`
- Tracks: request number, timestamp, and requested URL
- Helps monitor server activity

### 8. Server Access
- Server runs on `http://localhost:8000`
- Can test different routes by visiting:
  - `http://localhost:8000/` (Home)
  - `http://localhost:8000/about` (About)
  - `http://localhost:8000/anything` (404 error)

## Key Concepts Learned
- **HTTP server creation** using Node.js
- **Request routing** based on URL paths
- **Response handling** with `res.end()`
- **File logging** for request tracking
- **Port binding** and server startup 