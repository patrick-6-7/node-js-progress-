const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    return res.send('you are at the root node');
})

app.get('/about', (req, res) =>{
    return res.send(`hi ${req.query.UserName}, welcome to the about page!`);
});

app.listen(8000, () => {
    console.log('server started on port 8000');
});

