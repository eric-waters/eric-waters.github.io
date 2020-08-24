"use strict";

var PORT = process.env.PORT || 5000;

var express = require('express');

var app = express();

var path = require('path');

var http = require('http');

var server = http.Server(app);
app.use(express["static"]('client'));
server.listen(PORT, function () {
  console.log("Website running on port ".concat(PORT));
  console.log("Directory: ".concat(__dirname));
});

var io = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.on('message', function (msg) {
    io.emit('message', msg);
  });
});