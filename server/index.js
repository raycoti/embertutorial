// server.js
const path = require('path')
const morgan = require('morgan')

// modules
const express        = require('express');  
const app            = express();

// set our port
const port = process.env.PORT || 3000;

// set the static files location 
app.use(express.static(__dirname + '/public'));

app.use('/api', require('./api'))

app.use(express.static(path.join(__dirname, '..', 'public')))

// startup our app at http://localhost:3000
app.listen(port);


// expose app
exports = module.exports = app;