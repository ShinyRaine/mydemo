function findnum (a, b) {
	var num = []
	var arr1 = a.split('')
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] == b) {
			num.push(arr1[i])
		}
	}
	return num.join('')
}


function rev(num) {
	var str = num.toString()
	var arr = str.split('')
	var resultArr = []
	for (var i = 0; i < arr.length; i++) {
		result.unshift(arr[i].pop())
	}
	return resultArr.join('')
}