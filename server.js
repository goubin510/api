var express = require('express')
var app = express()

var port = 3000;
var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

app.get('/', function(req, res) {

	res.send('Hello World')
})

app.get('/:time', function (req, res) {
	var t = new Date(req.params.time);
	var json = {};

	json.unix = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
	json.natural = month[t.getMonth()] + " " + t.getDate() + ", " + t.getFullYear();

  	res.send(JSON.stringify(json))
})

app.listen(port, function () {
  	console.log("server running on : http://localhost:" + port)
})
