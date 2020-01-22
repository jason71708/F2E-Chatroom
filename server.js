'use strict';

const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const path = require('path');
const serveStatic = require('serve-static');

const server = express()
  .use('/', serveStatic(path.join(__dirname, '/dist')))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))

const io = socketIO(server);

io.on('connection', function (socket) {
  socket.on('userInOut', function (data) {
    io.emit('userInoutMessage', data)
  });
  socket.on('sendMessage', function(data) {
    socket.broadcast.emit('newMessage', data)
  })
});