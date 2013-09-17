
var fs = require('fs');
var fil = fs.readFileSync('index.html');
var str = fil.toString();
var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(fileContent);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
