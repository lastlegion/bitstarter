var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World2!');
	var page_data = fs.readFileSync('index.html');	
	console.log(page_data, 'utf-8');
	page_data = page_data.toString();
	response.send(page_data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

