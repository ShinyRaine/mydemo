var exchange = function (arr, i, j) {
	var temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}
var heapify = function (arr, i, size) {
	var l = i*2+1,
		r = l+1,
		max = i
	if (l < size && arr[l] > arr[max]) {
		max = l
	}
	if (r < size && arr[r] > arr[max]) {
		max = r
	}
	if (max != i) {
		exchange(arr, i, max)
		heapify(arr, max, size)
	}
}
var build = function (arr) {
	var s = Math.floor( arr.length/2 ) - 1
	for (var i = s; i >= 0 ; i--) {
		heapify(arr,i,arr.length)
	}
}
var heapSort = function (arr) {
	build(arr)
	for (var i = arr.length-1; i > 0; i--) {
		exchange(arr, 0, i)
		heapify(arr, 0, i)
	}
	return arr
}
var a = [8, 2,9,6,3,5,7,8]
heapify(a,0)

console.log(heapSort(a))