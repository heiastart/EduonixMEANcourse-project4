const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// Getting sensitive data from the config module (config.js)
const { db_url, hostname, host_port } = require('./config');

// Import the routes for this todo-app
var endpoints = require('./router/routes');
var app = express();


// Set up the mongoose/MongoDB connection
mongoose.connect(db_url, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// Important app-use configurations
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/todo', endpoints);


app.get('/', (req, res) => {
  res.send('Root address is working!!');
})


// Setting up local server to listen on specified port
app.listen(host_port, hostname, ()=> {
  console.log(`Local server running on port ${host_port}`);
})