// 这个算法返回数组中第i小的数

//快排中的划分函数
var partition = function(arr, p, r) {
	var x = arr[r]
	var i = p
	for (var j = p; j < r; j++) {
		if (arr[j] < x) {
			exchange(arr,i,j)
			i++
		}
	}
	exchange(arr,i,r)
	return i
}
var exchange = function (arr, i, j) {
	var temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}
var select = function(arr, p, r, i) {
	if (p == r) {
		return a[p]
	}
	var q = partition(arr, p, r)
	console.log(arr,q,p)
	var k = q - p + 1
	if (i == k) {
		return arr[q]
	}else if (i < k) {
		return select(arr, p, q-1, i)
	}else {
		return select(arr, q+1, r, i)
	}
}
var a = [2,5,1,3,0,6]
select(a, 0, a.length-1, 1)