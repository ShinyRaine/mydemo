// max是输入数组的最大值
var countSort = function (arr) {
	var len = arr.length
	var c = [], result = []
	var max = 0 
	for (var i = 0; i < len; i++) {
		if (arr[i] > max) {
			max = arr[i]
		}
	}
	for (var i = 0; i < max+1; i++) {
		c[i] = 0
	}
	for (var i = 0; i < len; i++) {
		c[arr[i]] = c[arr[i]] + 1
	}
	for (var i = 1; i < max+1; i++) {
		c[i] = c[i] + c[i-1]
	}
	for (var i = len - 1; i >= 0; i--) {
		result[c[arr[i]] - 1] = arr[i]
		c[arr[i]] = c[arr[i]] - 1

	}
	return result
}