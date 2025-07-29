# Node.js Modules Learning Project

## Things I Learned Today

1. **Modules**: Importing any functionality from another js file is known as a module
2. **NPM Scripts**: Using `npm start` we can run scripts defined in our package.json file
3. **Module Syntax**: In normal JS files we use ES6 syntax, but in Node.js we use CommonJS syntax

## Module Syntax Examples

### CommonJS (Node.js)
```javascript
// Exporting (math-utils.js)
module.exports = {add, subtract};

// Importing (main.js)
const math = require('./math-utils.js');
```

### ES6 Modules (Browser/Modern JS)
```javascript
// Exporting
export {add, subtract};

// Importing
import { add, subtract } from './math-utils.js';
```

## Project Structure
- `main.js` - Entry point that imports and uses math functions
- `math-utils.js` - Module containing add and subtract functions
- `package.json` - Project configuration with npm scripts

## How to Run
```bash
npm start
# or
node main.js
```
