"use strict";
const http = require('http');
const fs = require('fs');
const path = require('path');
const reactEngine = require('react-engine');
var app = require('http').createServer(handler)
var io = require('socket.io')(app);

app.listen(3000);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
  	console.log(err);
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('Response', function(data) {
  	//Send data to presenter
  	socket.emit('responseDate', data);

  })

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});