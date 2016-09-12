// 享元模式 文件上传
var Upload = function(type) {
	this.type = type //一个内部状态
}
Upload.prototype.delFile = function(id) {
	uploadManager.setExternalState(id, this)
	if (this.fileSize < 2000) {
		return this.dom.parentNode.removeChild(this.dom)
	}
	if (window.confirm('delete?'+this,fileName)) {
		return this.dom.parentNode.removeChild(this.dom)
	}
}
// 实例化的工厂
var uploadFactory = (function() {
	var createFlyWeightObjs = {}
	return {
		create: function(type) {
			if (createFlyWeightObjs[type]) {
				return createFlyWeightObjs[type]
			}else {
				return createFlyWeightObjs[type] = new Upload(type)
			}
		}
	}
})()
// 管理器封装外部状态
var uploadManager = (function() {
	var uploadDatabase = {}
	return {
		add: function(id, type, fileName, fileSize) {
			var flyWeightObj = uploadFactory.create(type)

			var dom = document.createElement('div')
			dom.innerHTML = 'name:' + fileName + ';size:' + fileSize + '<button class="delete">delete</button>'
			dom.querySelector('.delete').onclick = function() {
				flyWeightObj.delFile(id)
			}
			document.body.appendChild(dom)

			uploadDatabase[id] = {
				fileName: fileName,
				fileSize: fileSize,
				dom: dom
			}
			return flyWeightObj
		},
		setExternalState: function(id, flyWeightObj) {
			var uploadData = uploadDatabase[id]
			for (var i in uploadData) {
				flyWeightObj[i] = uploadData[i]
			}
		}
	}
})()
var id = 0
var startUpload = function(type, files) {
	for (var i = 0; i < files.length; i++) {
		var uploadObj = uploadManager.add(++id, type, files[i].fileName, files[i].fileSize)
	}
}
startUpload('plugin', [
	{
	fileName: '1',
	fileSize: 1000
	},
	{
	fileName: '2',
	fileSize: 1000
	},
	{
	fileName: '3',
	fileSize: 1000
	}
])