const https = require('https')
process.stdout.write('choose: ')
process.stdin.resume() 
process.stdin.on('data', getBook)
function getBook(isbn) {
	console.log(isbn)
	https.get({
		host: 'api.douban.com',
	 	path: '/v2/book/isbn/' + isbn}, (rs) => {
	 		var data = ''
			rs.on('data', (body) => {
				data += body
			})
			rs.on('end', () => {
				console.log(JSON.parse(data))
			})
	})
}
