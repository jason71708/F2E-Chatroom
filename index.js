const path = require('path'); //new
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000; //new

server.listen(port);
// WARNING: app.listen(80) will NOT work here!

app.use(express.static(path.join(__dirname, 'dist')));  //new
// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

io.on('connection', function (socket) {
  socket.on('userInOut', function (data) {
    io.emit('userInoutMessage', data)
  });
  socket.on('sendMessage', function(data) {
    socket.broadcast.emit('newMessage', data)
  })
});