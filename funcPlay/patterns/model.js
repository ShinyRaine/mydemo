var Beverage = function() {}
Beverage.prototype.boil = function() {
	console.log('烧水')
}
Beverage.prototype.brew = function() {
	throw new Error('子类要重写brew')
}
Beverage.prototype.add = function() {
	throw new Error('子类要重写add')
}
Beverage.prototype.needAdd = function() { //这是个钩子
	return true
}
Beverage.prototype.init = function() {
	this.boil()
	this.brew()
	if (this.needAdd()) {
		this.add()
	}
}

var Coffee = function() {}
Coffee.prototype = new Beverage()
Coffee.prototype.brew = function() {
	console.log('冲咖啡')
}
Coffee.prototype.add = function() {
	console.log('加糖')
}

var Tea = function() {}
Tea.prototype = new Beverage()
Tea.prototype.brew = function() {
	console.log('泡茶')
}
Tea.prototype.add = function() {
	console.log('加柠檬')
}
Tea.prototype.needAdd = function() {
	return false
}

var coffee = new Coffee()
coffee.init()
var tea = new Tea()
tea.init()