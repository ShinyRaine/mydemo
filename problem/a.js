var str = '010'
var arr = str.split('')
var resultarr =[]
var max = 0
for (var i = 0; i < arr.length; i++) {
	var sum1,sum2
	for (var j = i - 1; j >= 0; j--) {
		if (arr[j] == 0) {
			arr[j] = -1
		}
		sum1 += arr[j]
		if (sum1>0) {break}
	}
	for (var k = i; k <arr.length; k++) {
		if (arr[k] == 0) {
			arr[k] = -1
		}
		sum1 += arr[k]
		if (sum1<0) {break}
	}
	resultarr.push(arr.slice(j+1,k-1))
}
for (var i = 0; i < resultarr.length; i++) {
	if (max<resultarr[i].length) {
		max = resultarr[i].length
	}
}
console.log(max)


var str = 'abcd'
var copy = ''
if (str.length <= 2){
    console.log(0)
}
var resultarr = []
for (var i = 0; i < str.length; i++) {
	copy = str
	a1 = copy.substr(0,i)
	a2 = copy.substr(i+1, str.length-1)
	copy = a1.concat(a2)
	
	for (var j = 0; j < copy.length; j++) {
		var copy2=copy
		b1 = copy.substr(0,j)
		b2 = copy.substr(j+1, copy.length-1)
		copy2 = b1.concat(b2)
		resultarr.push(copy2)
	}
}
var obj = {}
var result = []
for (var i = 0; i < resultarr.length; i++) {
	if (!obj[resultarr[i]]){
        obj[resultarr[i]] = true;
        result.push(resultarr[i]);
     } 
}
console.log(result)


var str = 'datadata'
var strSet = new Set([])
[].forEach.call(str, 
	(outerCurrent, outerIndex) 
	=> ([].forEach.call(str, (innerCurrent, innerIndex) 
	=> outerIndex !== innerIndex && strSet.add(
		(s = str.split(''),
		 s.splice(Math.max(innerIndex, outerIndex ), 1), 
		 s.splice(Math.min(innerIndex, outerIndex), 1), 
		 s.join('')
		)
		)
	)))
console.log(strSet)

  $.post("1",function(result_1){
    $.post("2",function(result_2){
    	$.post("3",function(result_3){
    
  		});   
  	});
  });