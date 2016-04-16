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

app.get('/api/questions', (req, res) => {
  res.json(database);
});

var database = {
  questions:
  [
    { cType: 'bar',
      question: 'Who has the coolest scratch project?',
      choices: [{ Alex: 0, Daniel: 0, Dave: 0, Carlos: 0 }],
      qType: 'multiple'
    },
    { cType: 'pie',
      question: 'What is your favorite beer?',
      choices: [{ 'Stone IPA': 0, 'Corona Light': 0, 'Guiness': 0, 'Sierra Nevada': 0, 'Blue Moon': 0, "I don't drink beer, I drink bourbon": 0}],
      qType: 'multiple'
    },
    {
      cType: 'bar',
      question: 'What was your favorite company that came to hiring day?',
      choices: [{ 'Dog Vacay': 0, 'Dollar Shave Club': 0, 'LA Body Points': 0, Whisper: 0, Procore: 0, ESPN: 0, Ticketmaster: 0 }],
      qType: 'multiple'
    },
    { cType: 'pie',
      question: 'Thumbs Up or Thumbs Down on drinks last Thursday?',
      choices: [{ Up: 0, Down: 0 }],
      qType: 'thumbs'
    }
  ]
};

http.listen(3000);
