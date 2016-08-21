Singlon.getInstance = (function() {
	var instance = null
	return function(name) {
		if (!instance) {
			instance = new Singleton(name)
		}
		return instance
	}
})()

var getSingle = function (fn) {
	var result
	return function () {
		return result || (result = fn.apply(this,arguments))
	}
}
