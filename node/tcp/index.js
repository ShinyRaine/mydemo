
var count = 0,
	users = {}
var server = require('net').createServer(function(conn){

	conn.setEncoding('utf8')
	var name 
	conn.write('welcome! ' + count +' people hear. \nenter name: ')
	count++
	function broadcast(msg, except) {
		for (var i in users) {
			if (!except || i != name) {
				users[i].write(msg)
			}
		}
	}
	conn.on('data', function(data){
		data = data.replace('\r\n','')
		if (!name) {
			if (users[data]) {
				conn.write('enter another: ')
				return
			} else {
				name = data;
				users[name] = conn;
			}
			broadcast(name + 'join \n')
		} else {
			broadcast('> ' + name + ': ' + data + '\n', true)
		}
	})
	conn.on('close', function () {
		count--;
		delete users[name]
		broadcast(name + ' left\n')
	})
})
server.listen(3000,function(){
	console.log('listening on 3000')
})
