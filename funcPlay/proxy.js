// 代理模式图片预加载
var myImage = (function () {
	var imgNode = document.createElement('img')
	document.body.appendChild(imgNode)

	return function (src) {
		imgNode.src = src
	}
})()
var proxyImage = (function () {
	var img = new Image
	img.onload = function () {
		myImage(this.src)
	}
	return function (src) {
		myImage('loading.gif')
		img.src = src
	}
})()

// 代理模式合并HTTP请求

var proxySendFile = (function(){
	var cache = [],
		timer

		return function(id) {
			cache.push(id)
			if (timer) {
				return
			}
			timer = setTimeout(function(){
				sendFile(cache.join(',')) //假装是发送文件的函数
				clearTimeout(timer)
				timer = null
				cache.length = 0
			},2000)
		}
})()

// 惰性加载

