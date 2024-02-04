// Create web server

// Load modules
var http = require('http');
var fs = require('fs');
var url = require('url');

// Create web server
http.createServer(function(request, response) {
  var urlObj = url.parse(request.url, true);
  var query = urlObj.query;
  var pathname = urlObj.pathname;

  // Check URL path
  if (pathname === '/' || pathname === '/index.html') {
    // Read file
    fs.readFile('index.html', function(err, data) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(data);
    });
  } else if (pathname === '/getComment') {
    // Get comment
    fs.readFile('comment.json', function(err, data) {
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.end(data);
    });
  } else if (pathname === '/writeComment') {
    // Write comment
    fs.readFile('comment.json', function(err, data) {
      var comments = JSON.parse(data);
      comments.push(query);
      fs.writeFile('comment.json', JSON.stringify(comments), function(err) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Add comment');
      });
    });
  } else {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.end('Not found');
  }
}).listen(8080, function() {
  console.log('Server running at http://localhost:8080/');
});