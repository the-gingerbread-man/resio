"use strict";
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('client'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + './../client/index.html'));
});

app.get('/client/bundle.js', function (req, res) {
  res.sendFile(path.join(__dirname + './../client/bundle.js'));
});

io.on('connection', function(socket){

  socket.on('viewerAnswer', function(data) {
  	console.log('Server Response: ' + data);
  	io.emit('serverResponse', data);
  });

});

http.listen(3000);

