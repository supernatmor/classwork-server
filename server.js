var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

var meanarray = ["bad thing 1", "bad thing 2", "bad thing 3"];
var nicearray = ["nice thing 1", "nice thing 2", "nice thing 3"];

var randomNice = nicearray[Math.floor(Math.random() * nicearray.length)]
var randomMean = meanarray[Math.floor(Math.random() * meanarray.length)]

function handleRequest1(req, res) {
	res.end(randomNice + req.url)
}

var server = http.createServer(handleRequest1);

server.listen(PORT1, function() {
	console.log("server listening on http://localhost:" + PORT1);
})



function handleRequest2(req, res) {
	res.end(randomMean + req.url)
}

var server = http.createServer(handleRequest2);

server.listen(PORT2, function() {
	console.log("server listening on http://localhost:" + PORT2);
})