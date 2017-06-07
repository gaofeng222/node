/*var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write('Hello world!');
	res.end();
}).listen(8888)
console.log('The server is running on port 8888')*/
var http = require('http');
function onRequest(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write('Hello world');
	response.end()
}
http.createServer(onRequest).listen(7000)