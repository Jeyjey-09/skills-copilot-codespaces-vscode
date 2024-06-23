// Create web server

var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var comments = [];

var server = http.createServer(function(req, res) {
	var urlObj = url.parse(req.url, true);
	var pathname = urlObj.pathname;
	if (pathname === '/') {
		fs.readFile('./index.html', function(err, data) {
			if (err) {
				res.end('read file error');
			} else {
				res.end(data.toString());
			}
		});
	} else if (pathname === '/getComments') {
		var data = urlObj.query;
		var comment = data.comment;
		comments.push(comment);
		res.end(JSON.stringify(comments));
	} else {
		// console.log(pathname);
		var file_path = path.join(__dirname, pathname);
		fs.exists(file_path, function(exists) {
			if (exists) {
				fs.readFile(file_path, function(err, data) {
					if (err) {
						res.end('read file error');
					} else {
						res.end(data.toString());
					}
				});
			} else {
				res.end('404');
			}
		});
	}
});

server.listen(3000, function() {
    console.log('server is listening on 3000');
});