const path = require('path'); //new
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000; //new

server.listen(port);
// WARNING: app.listen(80) will NOT work here!

app.use('/', express.static(path.join(__dirname, '/dist')));  //new
// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// });


// var chat = io
//   .of('/chat')
//   .on('connection', function (socket) {
//     socket.emit('a message', {
//         that: 'only'
//       , '/chat': 'will get'
//     });
//     chat.emit('userComeInOut', {
//         everyone: 'in'
//       , '/chat': 'will get'
//     });
//   });
io.on('connection', function (socket) {
  // socket.on('userInOut', function (data) {
  //   console.log(data.avatarNum+'.使用者: '+data.userName);
  // });
  socket.on('sendMessage', function(data) {
    io.emit('newMessage', data)
  })
});