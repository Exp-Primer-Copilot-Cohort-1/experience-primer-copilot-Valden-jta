//create web server
var express = require('express');
var app = express();
var fs = require("fs");

//get comments
app.get('/comments', function (req, res) {
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

//post comments
app.post('/comments', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["comment3"] = req.query.comment3;
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

//delete comments
app.delete('/comments', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["comment3"];
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

//update comments
app.put('/comments', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["comment3"] = req.query.comment3;
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Web server started at http://%s:%s", host, port)

})