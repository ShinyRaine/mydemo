var receiver1 = {
	log: function() {
		console.log(1)
	}
}
var setCommand = function(button, func) {
	button.onclick = func.bind(this)
}
var getLogCommand = function(receiver) {
	return function() {
		receiver.log()
	}
}
var logCommad = getLogCommand(receiver1)
setCommand(button1, logCommad) //假设有个叫button1的按钮

var receiver1 = {
	log: function() {
		console.log('on')
	},
	unlog: function() {
		console.log('off') //假装有撤销的代码
	}
}
var setCommand = function(button, cmd) {
	button.onclick = cmd.execude
}
var offCommand = function(button, cmd) {
	button.onclick = cmd.unexecude
}
var LogCommand = function(receiver) {
	return {
		execude: function() {
			receiver.log()
		},
		unexecude: function() {
			receiver.unlog()
		}
	}
}
var logCommad = new LogCommand(receiver1)
setCommand(button1, logCommad) //假设有个叫button1的按钮
offCommand(button2, logCommad) //假设有个叫button2的按钮

var MacroCommand = function() {
	return {
		commands: [],
		add: function(command) {
			this.commands.push(command)
		},
		execute: function() {
			for(var i = 0;i < commands.length; i++){
				commands[i].execute()
			}
		}
	}
}