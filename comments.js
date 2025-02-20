// Create web server
// Create a new web server using the express framework
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Use the body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Use the express.static middleware
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Array to store comments
let comments = [];

// Get request to the root URL
app.get('/', (req, res) => {
    res.render('index', { comments: comments });
});

// Post request to the root URL
app.post('/', (req, res) => {
    // Add the new comment to the comments array
    comments.push(req.body.comment);
    // Redirect to the root URL
    res.redirect('/');
});

// Listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});