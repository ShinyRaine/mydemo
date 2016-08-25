var exchange = function (arr, i, j) {
	var temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}
var quickSort = function (arr) {

	var sort = function(arr, p, r) {
		if (p<r) {
			q = partition(arr, p, r)
			sort(arr, p, q-1)
			sort(arr, q+1, r)
		}
	}

	sort(arr,0,arr.length-1)
	
}

var partition = function(arr, p, r) {
	x = arr[r]
	i = p - 1
	for (var j = p; j < r; j++) {
		if (arr[j] < x) {
			i++
			exchange(arr,i,j)
		}
	}
	exchange(arr,i+1,r)
	return i+1
}

var a = [8,2,9,6,3,5,7,8]
quickSort(a)
console.log(a)