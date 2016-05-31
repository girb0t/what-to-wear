// Main starting point of the application
const express = require('express');
const morgan = require('morgan');
const http = require('http');
const app = express();
const router = require('./router');

// App Setup
app.use(morgan('combined')); //for logging incoming requests
router(app);

// Server Setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);
