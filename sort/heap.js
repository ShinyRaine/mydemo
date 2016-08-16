var heapify = function (arr, i) {
	var l = i*2+1,
		r = l+1,
		size = arr.length,
		max = i
	if (l < size && arr[l] > arr[max]) {
		max = l
	}
	if (r < size && arr[r] > arr[max]) {
		max = r
	}
	if (max != i) {
		var temp = arr[i]
		arr[i] = arr[max]
		arr[max] = temp
		heapify(arr,max)
	}

}
var build = function (arr) {
	var s = Math.floor( arr.length/2 )
	for (var i = s; i >= 0 ; i--) {
		heapify(arr,i)
	}
	return arr
}
var heapSort = function (arr) {
	build(arr)
	var result = []
	for (var i = arr.length; i > 0; i--) {
		result.unshift(arr.shift())
		heapify(arr, 0)
	}
	return result
}
var a = [8, 2,9,6,3,5,7,8]
heapify(a,0)

console.log(heapSort(a))