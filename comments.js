//Create a simple web server in node.js that serves the comments.js file to the browser. 
//You can use the http module's createServer method to do this. 
//The server should listen on port 4000.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    fs.createReadStream('comments.js').pipe(res);
});

server.listen(4000);
console.log('Server is listening on port 4000');
// The server should be able to serve the comments.js file to the browser.
// The server should listen on port 4000.
