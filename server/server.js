'use strict'; // eslint-disable-line strict
const fs = require('fs'); // eslint-disable-line no-unused-vars
const path = require('path');
const express = require('express');

//create an instance of an express application
const app = express();

//our express app will act as a handler to an http server - notice '.Server' method
const http = require('http').Server(app); // eslint-disable-line new-cap

//require in socket.io
//the html page also needs a script tag - see client/index.html
//require in socket.io and pass the http server to it
//the socket is now listening on our server
//this triggers the 'connection' event that io listens for below
const io = require('socket.io')(http);

app.use(express.static('client'));

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}./../client/index.html`));
});

app.get('/client/bundle.js', (req, res) => {
  res.sendFile(path.join(`${__dirname}./../client/bundle.js`));
});

//when the server starts, io needs to listen for the 'connection' event
//that event triggers a callback where it is common practice to name the parameter 'socket'
//'.on' acts as an event listener - socket will only listen for events
//while only io will emit events with the '.emit' method
//this is different in the react components where socket will both listen and emit
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

//http is our server and therefore needs to be listening on a port
http.listen(3000);
