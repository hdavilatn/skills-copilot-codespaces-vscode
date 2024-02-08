//Create a web server
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

//create server
http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;
    var ext = path.extname(pathname);
    var type = '';
    switch(ext){
        case '.html':
            type = 'text/html';
            break;
        case '.js':
            type = 'text/javascript';
            break;
        case '.css':
            type = 'text/css';
            break;
        case '.jpg':
            type = 'image/jpeg';
            break;
        case '.png':
            type = 'image/png';
            break;
    }
    if(type){
        fs.readFile(__dirname + pathname, function(err, data){
            if(err){
                res.writeHead(500);
                return res.end('Error loading ' + pathname);
            }
            res.writeHead(200, {'Content-Type': type});
            res.end(data);
        })
    }
}).listen(3000);
console.log('Server running at http://localhost:3000/');