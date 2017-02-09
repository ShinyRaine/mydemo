var qs = require('querystring')
require('http').createServer(function(req,res){
	if ('/' == req.url) {
		res.writeHead(200, {'Content-Type' : 'text/html'})
		res.end([
			'<form method="POST" action="/url">',
			'<h1>form</h1>',
			'<label>name</label>',
			'<input name="name">',
			'<button>submit</button></form>'
			].join(''))		
	} else if ('/url' == req.url && 'POST' == req.method) {
		var body = ''
		req.on('data', function(chunk) {
			body += chunk
		})
		req.on('end', function() {
			res.writeHead(200, {'Content-Type': 'text/html'})
			res.end('<p>name: ' + qs.parse(body).name +'</p>')
		})
	} else {
		res.writeHead(200)
		res.end('404')
	}

}).listen(3000)