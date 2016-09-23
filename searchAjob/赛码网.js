// 约德尔测试
var line,input=[];
while(line = read_line()){
    line = line.trim();
    input.push(line)
}
var n = 0
var a = input[0].replace(/[0-9a-zA-Z]/g,'1').replace(/[^0-9a-zA-Z]/g,'0').split('')
var b = input[1]
for (var i = 0; i < a.length; i++) {
	if (a[i] == b[i]) {
		n++
	}
}
print((n/a.length * 100).toFixed(2)+'%')

// 百度第二题颜色反
var line,input=[];
while(line = read_line()){
    line = line.trim();
    input.push(line)
}
for (var i = 0; i < input.length; i++) {
	input[i] = input[i].replace('#', '')
	var arr = input[i].split('')
	var result = []
	for (var j = 0; j < arr.length; j++) {
		var num = 15 - parseInt(arr[j], 16)
		var re = num.toString(16)
		result.push(re.toUpperCase())
	}
	print('#' + result.join('') + '\n')
}

// 搜狐的
var line,input=[];
while(line = read_line()){
    line = line.trim();
    input.push(line)
}

var arr = input.split("\n");
var len = arr.shift()
var arr = arr[1].split(' ')
var j = 0
var arr = [2, 0, 1, 1, 1]
var len = 5
for (var i=0; i<arr.length;) {
	i += arr[i]
	if (arr[i] == 0) {
		break
	}
	j++
}
if (i == len) {
	console.log(j);
}else {
	console.log(-1);
}
//2
var line,input=[];
while(line = read_line()){
    line = line.trim();
    input.push(line)
}
input = ['1000',2]
var arr = input[0].split('')
arr.sort()
var result = input[0]
for (var i = 0; i < input[1]; i++) {
	var num = result.indexOf(arr[i])
	result = result.slice(0,num) + result.slice(num+1)
}
console.log(result)


process.stdin.resume();
process.stdin.setEncoding('utf-8');
var input = "";
var input_array = "";
process.stdin.on('data', function (data) {
    input += data;
})
process.stdin.on('end', function () {
    var arr = input.split("\n");
	var res = get(arr[0],arr[1])
    process.stdout.write(" " + res + " \n");
});
function get(str){
var arr = str.split('')
arr.sort()
var result = str
for (var i = 0; i < input[1]; i++) {
	var num = result.indexOf(arr[i])
	result = result.slice(0,num) + result.slice(num+1)
}
return result
}

//3
var minStr = function (str1, str2) {
  if (str1.length > str2.length) {
    return str2
  }else{
  	return str1
  }
}

var isSubset = function (subSet, set) {
  for (var i = 0; i < 26; i++) {
    if (subSet[i] && !set[i]) {
      return false
    }
  }
  return true
}

var minSubStr = function (s, d) {
  var ret = '',
      Sset = [], Dset = [],
      rawS = s

  for (var i = 0; i < 26; i++) {
    Sset[i] = false
    Dset[i] = false
  }

  for (var i = 0; i < d.length; i++) {
    Dset[d[i].charCodeAt() - 'A'.charCodeAt()] = true
  }
  for (var o = 0; o < s.length; o++) {
    s = s.slice(o) + s.slice(0, o)
    for (var i = d.length; i <= s.length; i++) {
      for (var j = 0; j <= s.length - i; j++) {
        var SsetCopy = Sset.slice()
        for (var k = 0; k < i; k++) {
          SsetCopy[s[j + k].charCodeAt() - 'A'.charCodeAt()] = true
        }
        if (isSubset(Dset, SsetCopy)) {
          ret = ret.length === 0 ? s.substr(j, i) : minStr(ret, s.substr(j, i))
        }
      }
    }
  }
  return s.length - ret.length
}

minSubStr('ATTMBQECPD', 'ABCDE')