var throttle = function (fn,interval) {
	var self = fn
		timer,
		firstTime = true

	return function () {
		var args = arguments,
			me = this
		if (firstTime) {
			self.apply(me,args)
			return firstTime = false
		}
		if (timer) {
			return false
		}
		timer = setTimeout(function () {
			clearTimeout(timer)
			timer = null
			self.apply(me, args)
		}, interval || 500)
	}
}
var timeChunk = function (arr,fn,count) {
	var obj,timer
	var start = function () {
		for (var i = 0; i < Math.min(count || 1, arr.length); i++) {
			var obj = arr.shift()
			fn(obj)
		}
	}
	return function () {
		timer = setInterval(function(){
			if (arr.length === 0) {
				return clearInterval(timer)
			}
			start()
		},200)
	}
}