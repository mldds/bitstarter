var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

var app = express.createServer(express.logger());

app.use(express.static(__dirname));

app.get('/', function(request, response) {
    var html = fs.readFileSync('index.html').toString();
    response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
