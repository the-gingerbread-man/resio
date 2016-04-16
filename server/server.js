'use strict'; // eslint-disable-line strict
const fs = require('fs'); // eslint-disable-line no-unused-vars
const path = require('path');
const express = require('express');

const app = express();
const http = require('http').Server(app); // eslint-disable-line new-cap
const io = require('socket.io')(http);

app.use(express.static('client'));

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}./../client/index.html`));
});

app.get('/client/bundle.js', (req, res) => {
  res.sendFile(path.join(`${__dirname}./../client/bundle.js`));
});

io.on('connection', socket => {
  socket.on('viewerAnswer', data => {
    io.emit('serverResponse', data);
  });
});

http.listen(3000);
