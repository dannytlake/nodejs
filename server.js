var http = require('http');

var server = http.createServer(function(request,response){

if (request.url === '/favicon.ico') {
    response.writeHead(200, {'Content-Type': 'image/x-icon'} );
    response.end();
    console.log('favicon requested');
    return;
    }

console.log('Got a request' + request.url);


response.write('hi');
response.end();

});

server.listen(3000);