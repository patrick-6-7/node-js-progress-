## What I Learned Today

### 1. File System Module (`fs`)
- For file handling in Node.js, we need the built-in module called **`fs`**
- Import it using: `const fs = require('fs');`

### 2. Synchronous File Operations
**Characteristics:**
- **Blocking** - Code waits for the operation to complete
- **Returns result directly** - No callbacks needed
- **Use case** - When you need the file content immediately

**Methods:**
```javascript
// Writing files synchronously
fs.writeFileSync("./test.txt", "Hello, World!");

// Reading files synchronously
const data = fs.readFileSync("./test.txt", "utf-8");
console.log(data); // Returns the file content immediately
```

### 3. Asynchronous File Operations
**Characteristics:**
- **Non-blocking** - Code continues executing while file operation happens
- **Uses callbacks** - Result is handled in a callback function
- **Use case** - Better for performance, doesn't freeze the application

**Methods:**
```javascript
// Writing files asynchronously
fs.writeFile("./test.txt", "Hello, World Async!", (err) => {
    if (err) throw err;
    console.log("File saved!");
});

// Reading files asynchronously
fs.readFile("./test.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

### 4. Key Differences

| Aspect | Synchronous | Asynchronous |
|--------|-------------|--------------|
| **Blocking** | ✅ Blocks code execution | ❌ Non-blocking |
| **Return Value** | ✅ Returns data directly | ❌ Uses callbacks |
| **Performance** | ❌ Can freeze app | ✅ Better performance |
| **Error Handling** | Try-catch blocks | Callback error parameter |

### 5. Best Practices Learned
- **Use async for I/O operations** in production applications
- **Always specify encoding** (like "utf-8") when reading text files
- **Handle errors properly** in callbacks
- **Sync operations are okay** for small scripts or initialization code

## Project Files
- `file.js` - Main file demonstrating sync/async file operations
- `test.txt` - Sample file created by our operations
- `package.json` - Project configuration