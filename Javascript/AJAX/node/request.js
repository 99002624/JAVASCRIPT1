// var http = require('http');
// var server = http.createServer(function(req, res){
//  res.write("Have a great day");
//  console.log('Printing in browser');
//  console.log('request url'+req.url)
//  res.end();
//  console.log('This will be printed last');
// });
// server.listen('3000');
// console.log('This will be printed first');
// console.log('server runnning in port 3000');

var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200,{'content-type':'text/plain'});
 res.write("Have a great day");
 console.log('Printing in browser');
 console.log('request url'+req.url)
 res.end();
 console.log('This will be printed last');
}).listen('3000');
console.log('This will be printed first');
console.log('server runnning in port 3000');

