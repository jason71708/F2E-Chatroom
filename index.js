const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000; //new
const path = require('path'); //new
const serveStatic = require('serve-static');

const server = express()
server.use('/', serveStatic(path.join(__dirname, '/dist')));  //new
server.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})//new
server.listen(port);

const server2 = require('http').Server(server);

const io = socketIO(server2);

io.on('connection', function (socket) {
  socket.on('userInOut', function (data) {
    io.emit('userInoutMessage', data)
  });
  socket.on('sendMessage', function(data) {
    socket.broadcast.emit('newMessage', data)
  })
});