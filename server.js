// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const session = require('express-session');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const environment = process.env.NODE_ENV;

// Get our API routes
const api = require('./server/routes/api');

const app = express();

app.use(helmet());

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//use sessions for tracking logins
app.use(session({
  secret: 'zola secret',
  resave: true,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  }
}));

// Set our api routes
app.use('/api', api);

// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3001';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

