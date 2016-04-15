"use strict";
const fs = require('fs');
const path = require('path');
const http = require('http');
const app = require('http').createServer(handler);
const io = require('socket.io')(app);

app.listen(3000);

function handler (req, res) {
  
  fs.readFile(__dirname + '/index.html',
  
  function (err, data) {
    if (err) {
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'test/plain' });
      return res.end('Error loading index.html');
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
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
