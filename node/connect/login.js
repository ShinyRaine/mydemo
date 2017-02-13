var connect = require('connect'),
	users = require('./users')

var server = connect(
	connect.logger('dev'),
	connect.bodyParser(),
	connect.cookieParser(),
	connect.session({secret: 'my app'}),
	function(req, res, next) {
		console.log(req.session)
		if( '/' == req.url && req.session.loged_in ) {
			res.writeHead(200 ,{'Content-Type' : 'text/html'})
			res.end(req.session.name + '<p><a href="/logout">logout</a></p>')
		} else {
			next()
		}
	},
	function(req, res, next) {
		if ('/' == req.url && 'GET' == req.method ) {
			res.writeHead(200 ,{'Content-Type' : 'text/html'})
			res.end(['<form action="/login" method="POST">',
					'<p><input name="user"></p>',
					'<p><input name="password" type="password"></p>',
					'<button>Submit</button></form>'].join(''))
		} else {
			next()
		}
	},
	function(req, res, next) {
		if ('/login' == req.url && 'POST' == req.method ) {
			res.writeHead(200 )
			if (!users[req.body.user] || req.body.password != users[req.body.user].password) {
				res.end('用户名或密码错误')
			} else{
				req.session.loged_in = true
				req.session.name = users[req.body.user].name
				res.end('登录成功')
			}
		}else{
			next()
		}
	},
	function(req, res, next) {
		if ('/logout' == req.url) {
			req.session.loged_in = false
			res.writeHead(200)
			res.end('logout')
		} else {
			next()
		}
	}
)
server.listen(3000)