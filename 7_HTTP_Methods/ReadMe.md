## What I Learned Today

### 1. Understanding HTTP Methods
HTTP methods define the type of action to be performed on a resource:

**5 Main HTTP Methods:**

#### GET Method
- **Purpose**: Retrieve data from a server
- **Characteristics**: 
  - Read-only operation
  - Data passed via URL parameters
  - Safe and idempotent (can be repeated)
- **Example**: `GET /users?id=123` (get user information)

#### POST Method
- **Purpose**: Send data to a server to create new resources
- **Characteristics**:
  - Creates new data
  - Data sent in request body
  - Not idempotent (creates new resource each time)
- **Example**: Creating a new user account, submitting a form

#### PUT Method
- **Purpose**: Upload/place data on server for processing
- **Characteristics**:
  - Often used for file uploads
  - Can create or replace entire resource
  - Idempotent operation
- **Example**: Upload an image to convert to PDF, replace entire user profile

#### PATCH Method
- **Purpose**: Apply partial modifications to existing resources
- **Characteristics**:
  - Updates only specific fields
  - More efficient than PUT for small changes
  - Partial updates
- **Example**: Update only user's email address, change product price

#### DELETE Method
- **Purpose**: Remove/delete data from server
- **Characteristics**:
  - Removes specified resource
  - Idempotent (deleting same resource multiple times has same effect)
- **Example**: Delete user account, remove a blog post

### 2. Accessing HTTP Method in Node.js
```javascript
// req.method contains the HTTP method used
fs.appendFile('./logs.txt', `${Date.now()}: new ${req.method} request on path => ${req.url} \n`);
```

**What I implemented:**
- Added `req.method` to logging system
- Now logs show which HTTP method was used for each request
- Example log: `"new GET request on path => /about?UserName=prateek"`

### 3. HTTP Methods in Practice

**Current Implementation:**
- **GET requests**: All my current routes handle GET requests
- **Browser behavior**: Browsers typically use GET for navigation
- **URL parameters**: GET requests can include query parameters

**Real-world Usage Examples:**
```
GET /api/users          → Get list of all users
POST /api/users         → Create a new user
PUT /api/users/123      → Replace user 123 completely
PATCH /api/users/123    → Update specific fields of user 123
DELETE /api/users/123   → Delete user 123
```

### 4. Request Logging Enhancement
**Before**: Only logged URL and timestamp
**After**: Now logs HTTP method, timestamp, and URL
```javascript
// Enhanced logging shows method type
`${Date.now()}: new ${req.method} request on path => ${req.url}`
```

### 5. Method-Specific Behavior (Future Implementation)
While my current server handles all requests the same way, different methods should behave differently:

```javascript
// Example of method-specific handling
switch(req.method) {
    case 'GET':
        // Retrieve and send data
        break;
    case 'POST':
        // Process incoming data and create resource
        break;
    case 'DELETE':
        // Remove specified resource
        break;
}
```

### 6. Key Concepts Learned
- **HTTP methods define intent** - What action the client wants to perform
- **Method logging** - Tracking which operations users perform
- **RESTful principles** - Each method has a specific purpose
- **Request analysis** - `req.method` provides valuable debugging information

### 7. Testing Different Methods
**Current testing** (all GET requests):
- `http://localhost:8000/about?UserName=prateek`
- Browser automatically uses GET method

**Future testing** (will require tools like Postman):
- POST requests for form submissions
- PUT/PATCH for data updates
- DELETE for removing resources

## Next Steps
- Learn to handle POST data from request body
- Implement method-specific routing
- Practice with tools like Postman for testing different HTTP methods