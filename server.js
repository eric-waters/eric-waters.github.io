var PORT = process.env.PORT || 5000;
console.log(process.env.MyEmail);
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