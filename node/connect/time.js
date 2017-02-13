module.exports = function(opts) {
	var time = opts.time || 300
	return function (req, res, next) {
		var timer = setTimeout(function(){
			console.log( req.method, req.url, 'is taking too long')
		}, time)

		var end = res.end
		res.end = function(chunk,encoding) {
			res.end = end
			res.end(chunk, encoding)
			clearTimeout(timer)
		}
		next()
	}
}