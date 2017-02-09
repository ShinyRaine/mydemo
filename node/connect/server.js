var connect = require('connect')
var server = vonnect.createServer()
server.use(connect.static(__dirname + '/website'))
server.listen(3000)