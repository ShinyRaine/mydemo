var currying = function (fn) {
	var args = []
	return function () {
		if (arguments.length === 0) {
			return fn.apply(this, args)
		}else{
			Array.prototype.push.apply(args, arguments)
			return arguments.callee
		}
	}
}
var cost = (function() {
	var money = 0
	return function () {
		for (var i = 0; i < arguments.length; i++) {
			money += arguments[i]
		}
		return money
	}
})()
var cost = currying(cost)
cost(1)
cost(2)
console.log(cost())
Function.prototype.uncurrying = function () {
	var self = this
	return function () {
		var obj = Array.prototype.shift.call(arguments)
		return self.apply(obj,arguments)
	}
}
(function() {
	Array.prototype.push.call(arguments,3)
	console.log(arguments)
})(1,2)

var push = Array.prototype.push.uncurrying()
(function() {
	push(arguments,3)
	console.log(arguments)
})(1,2)