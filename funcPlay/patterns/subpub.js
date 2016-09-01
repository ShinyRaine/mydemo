var event = (function(){
	var clientList = {}

	var listen = function(key, fn) {
		if (!clientList[key]) {
			clientList[key] = []
		}
		clientList[key].push( fn )
	}

	var trigger = function() {
		var key = Array.prototype.shift.call(arguments)
		var fns = clientList[key]
		if (fns.length === 0 && !fns) {
			return false
		}
		for (var i = 0; i < fns.length; i++) {
			fns[i].apply(this,arguments)
		}
	}

	var remove = function(key, fn) {
		var fns = clientList[key]
		if (fns.length === 0 && !fns) {
			return false
		}
		if (!fn) {
			fns = []
		}else {
			for (var i = 0; i < fns.length; i++) {
				if (fns[i] == fn) {
					fns.splice(i,1)
				} 
			}
		}
	}

	return {
		listen:listen,
		trigger:trigger,
		remove:remove
	}
})()

event.listen('my',function(num) {
	console.log(num)
})
event.trigger('my',7)