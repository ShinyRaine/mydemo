var raidxSort = function (arr) {
	var d = 1
	// 求最高位
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].toString().length > d) {
			d = arr[i].toString().length
		}
	}
	for (var i = 1; i <= d; i++) {
		var digitArr = arr.map(function(x) {
			var digit = x.toString().length
			return Number(x.toString()[digit - i])  || 0
		})
		// 这里用前面的计数排序的方法，因为它是稳定的
		var max = 0, c = [], result=[], len = arr.length
		for (var j = 0; j < len; j++) {
			if (digitArr[j] > max) {
				max = digitArr[j]
			}
		}
		for (var j = 0; j < max+1; j++) {
			c[j] = 0
		}
		for (var j = 0; j < len; j++) {
			c[digitArr[j]] = c[digitArr[j]] + 1
		}
		for (var j = 1; j < max+1; j++) {
			c[j] = c[j] + c[j-1]
		}
		for (var j = len - 1; j >= 0; j--) {
			result[c[digitArr[j]] - 1] = arr[j]
			c[digitArr[j]] = c[digitArr[j]] - 1
		}
		for (var j = 0; j < arr.length; j++) {
			arr[j] = result[j]
		}
	}
	console.log(arr)
}