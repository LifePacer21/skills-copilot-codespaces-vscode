// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
var mongoose = require('mongoose');

// Import routes
const posts = require('./routes/posts');
const comments = require('./routes/comments');

// Create server
const app = express();

// Use modules
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Connect to database
mongoose.connect('mongodb://localhost:27017/posts', { useNewUrlParser: true });

// Use routes
app.use('/posts', posts);
app.use('/comments', comments);

// Start server
app.listen(process.env.PORT || 8081);
