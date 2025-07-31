## What I Learned Today

### 1. Understanding URLs and Protocols
**URL Structure**: `https://www.google.com/search?q=javascript`
- **Protocol**: `https://` (Hypertext Transfer Protocol Secure)
- **Domain**: `www.google.com`
- **Path**: `/search`
- **Query Parameters**: `?q=javascript`

**Protocol Types:**
- **HTTP**: Hypertext Transfer Protocol (unsecure)
- **HTTPS**: Hypertext Transfer Protocol Secure (encrypted)

### 2. URL Module in Node.js
```javascript
const url = require('url');
const myUrl = url.parse(req.url, true); // true parses query string into object
```

**What `url.parse()` returns:**
- **`pathname`**: The path part of the URL (e.g., `/about`)
- **`query`**: Object containing all query parameters
- **`search`**: The entire query string including `?`

### 3. Handling Query Parameters
**Example URLs I tested:**
- `/about?myName=prateek` → Extracts `myName` parameter
- `/about?myName=prateek&userId=1` → Multiple parameters
- `/results?search_query=java+script` → YouTube-style search

**Code Implementation:**
```javascript
// Access individual query parameters
if(myUrl.query.myName) {
    res.end(`Hello ${myUrl.query.myName}, welcome!`);
}

// Handle search queries like YouTube
case '/results':
    res.end('here are your results for ' + myUrl.query.search_query);
```

### 4. Route Handling with Pathname
Using `myUrl.pathname` instead of `req.url` for cleaner routing:
- **Benefits**: Ignores query parameters when matching routes
- **Example**: `/about?name=john` matches `/about` case

### 5. Favicon Handling
**Problem**: Browsers automatically request `/favicon.ico`
**Solution**: 
```javascript
if(req.url === '/favicon.ico') return res.end();
```
- Prevents unnecessary logging and processing
- Keeps logs clean from unwanted requests

### 6. Request Logging System
**Implementation:**
```javascript
fs.appendFile('./logs.txt', `${Date.now()}: new request on path => ${req.url} \n`, (err) =>{});
```

**What gets logged:**
- Timestamp of each request
- Complete URL with query parameters
- Helps track user behavior and debug issues

### 7. Practical Examples Implemented

**Routes Created:**
- **`/`** → Root/home page
- **`/about`** → Personal information page
- **`/about?myName=prateek`** → Personalized greeting
- **`/results?search_query=javascript`** → Search results simulation

**Real-world Applications:**
- **E-commerce**: `/products?category=electronics&price=100-500`
- **Social Media**: `/profile?userId=123&tab=posts`
- **Search Engines**: `/search?q=nodejs+tutorial`

### 8. Key Concepts Mastered
- **URL parsing** and component extraction
- **Query parameter handling** for dynamic responses
- **Clean routing** using pathname vs full URL
- **Request logging** for monitoring and debugging
- **Protocol understanding** (HTTP vs HTTPS)

## Testing Examples
Visit these URLs to test the functionality:
- `http://localhost:8000/`
- `http://localhost:8000/about`
- `http://localhost:8000/about?myName=YourName`
- `http://localhost:8000/results?search_query=nodejs`