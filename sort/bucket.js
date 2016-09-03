//arr在[0,1)区间
var bucketSort = function(arr) {
	var n = arr.length
	var b = new Array(10)
	var result = []
	for (var i = 0; i < n; i++) {
		var j = Math.floor(arr[i] * 10)
		if (b[j]) {
			b[j].push(arr[i])
		}else {
			b[j] = [arr[i]]
		}
	}
	for (var i = 0; i < b.length; i++) {
		if (b[i]) {
			b[i].sort()
			console.log(b[i])
			result = result.concat(b[i])
		}
	}
	return result
}
var a = [0.4,0.12,0.98,0.44,,0.11,0.22]
bucketSort(a)