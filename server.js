var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();
const path = require('path');
var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

server.listen(PORT, function() {
  console.log(`Website running on port ${PORT}`);
  console.log(`Directory: ${__dirname}`);
});

var io = require('socket.io')(server);

io.on('connection', function(socket) {
  socket.on('message', function(msg) {
    io.emit('message', msg);
  });
});

app.get('/', function(request, response) {
  response.send(__dirname);
  });