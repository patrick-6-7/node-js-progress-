## What I Learned Today

### 1. What is Express.js?
**Express** is a framework for server-side programming that helps keep our code more structured and readable.

**Key Benefits:**
- **Simplified routing** - Much easier than vanilla Node.js
- **Cleaner code structure** - Less boilerplate code
- **Built-in features** - Middleware, templating, static files
- **Better organization** - Separates concerns effectively

### 2. Express vs Vanilla Node.js Comparison

#### Vanilla Node.js (Previous Approach):
```javascript
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const myUrl = url.parse(req.url, true);
    switch(myUrl.pathname) {
        case '/':
            res.end('Home page');
            break;
        case '/about':
            res.end('About page');
            break;
        default:
            res.end('404 Not Found');
    }
});
server.listen(8000);
```

#### Express.js (Current Approach):
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.send('Home page');
});

app.get('/about', (req, res) => {
    return res.send('About page');
});

app.listen(8000);
```

### 3. Key Differences & Improvements

| Feature | Vanilla Node.js | Express.js |
|---------|----------------|------------|
| **Code Lines** | ~15 lines | ~8 lines |
| **Routing** | Manual switch statements | Built-in `app.get()` |
| **URL Parsing** | Manual `url.parse()` | Automatic `req.query` |
| **Response** | `res.end()` | `res.send()` (more features) |
| **Structure** | All logic in one callback | Separate route handlers |

### 4. Express.js Core Concepts

#### App Creation
```javascript
const express = require('express');
const app = express(); // Creates Express application
```

#### Route Definition
```javascript
app.get('/', (req, res) => {
    // Handle GET requests to root path
});
```

**Route Method Structure:**
- **`app.get()`** - Handle GET requests
- **First parameter**: Route path (`'/'`, `'/about'`)
- **Second parameter**: Handler function `(req, res) => {}`

#### Query Parameters
```javascript
// URL: /about?UserName=prateek
app.get('/about', (req, res) => {
    req.query.UserName // Automatically parsed!
});
```

### 5. Response Methods

#### `res.send()` vs `res.end()`
- **`res.send()`**: Express method with auto content-type detection
- **`res.end()`**: Native Node.js method (basic)

```javascript
res.send('Hello World');           // Express way
res.send({name: 'John'});          // Automatically converts to JSON
res.send('<h1>Hello</h1>');        // Sets HTML content-type
```

### 6. What I Implemented

**Routes Created:**
1. **`GET /`** → Root page with welcome message
2. **`GET /about`** → About page with personalized greeting

**Features Used:**
- **Express routing** instead of manual URL parsing
- **Query parameter access** via `req.query.UserName`
- **Cleaner response handling** with `res.send()`

### 7. Code Simplification Achieved

**Before (Vanilla Node.js):**
- Required multiple modules (`http`, `url`, `fs`)
- Manual URL parsing and routing
- Complex switch statements
- Manual favicon handling

**After (Express.js):**
- Single Express import
- Automatic routing with `app.get()`
- Built-in query parameter parsing
- Much cleaner and readable code

### 8. Testing the Server

**Start server**: `node index.js`
**Test URLs**:
- `http://localhost:8000/` → "you are at the root node"
- `http://localhost:8000/about` → "hi undefined, welcome to the about page!"
- `http://localhost:8000/about?UserName=prateek` → "hi prateek, welcome to the about page!"
