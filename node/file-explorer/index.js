var fs = require('fs')

fs.readdir(__dirname,function (err,files) {
	file(0)
	var stats = []
	function file(i) {
		var name = files[i]
		// fs.stat给出文件、目录的元数据
		// __dirname是当前文件目录
		fs.stat(__dirname + '/' + name, function(err,stat){
			stats[i] = stat
			if (stat.isDirectory()) {
				console.log(i + ' 目录 ' + name)
			} else {
				console.log(i + ' 文件 ' + name)
			}

			i++
			// process对象包含三个流对象：stdin,stdout,stderr。stdin默认是暂停的，程序一直在运行状态不退出。
			if (i == files.length) {
				read()
			}else {
				file(i)
			}
		})
	}
	function read() {
		process.stdout.write('choose: ')
		process.stdin.resume() // 等待输入
		process.stdin.on('data', option)
	}
	function option(data) {
		var name = files[Number(data)]
		if (!name) {
			process.stdout.write('choose: ')
		} else {
			process.stdin.pause() // 回到默认的暂停状态
			if (stats[Number(data)].isDirectory()) {
				fs.readdir(__dirname + '/' + name, function(err, files) {
					console.log(files)
				})
			}else{
				fs.readFile(__dirname + '/' + name, 'utf8', function(err, data){
					console.log(data)
				})				
			}
		}
	}
})
// 环境变量：process.env。NODE_ENV：开发模式
// Stream：fs.createReadStream