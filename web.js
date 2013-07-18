var express = require('express'),
    fs = require("fs");

var app = express.createServer();
app.configure(function() {
    app.use(express.logger());
    app.use(express.static(__dirname + "/public"));
});

app.get('/', function(request, response) {
  response.send(fs.readFileSync("index.html").toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});