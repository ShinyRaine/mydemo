// 时间过长的遍历解法
var longestPalindrome = function(s) {
    var res = '';

    for (var i = 0; i < s.length; i++) {
        var tempLongest = s[i];

        console.log('i', i)

        for (var j = 1; j <= Math.min(s.length - i, i); j ++) {
            var left = s[i - j];
            var right = s[i + j];
            console.log('j', j, tempLongest, left, right)
            if (left === right){
                tempLongest = left + tempLongest + right;
            } else {
                break;
            }
        }
        if (tempLongest.length > res.length) res = tempLongest;

        if (s[i] === s[i+1]) {
            var tempLongest2 = s[i] + s[i+1];

            for (var j = 1; j <= Math.min(s.length - i, i); j ++) {
                var left = s[i - j];
                var right = s[i + 1 + j];
                console.log('j2', j, left, right)
                if (left === right){
                    tempLongest2 = left + tempLongest2 + right;
                } else {
                    break;
                }
            }

            if (tempLongest2.length > res.length) res = tempLongest2;
        }
    }
    return res;
};

// 动态规划解法
var longestPalindrome = function (s) {
    var res = '';
    var arr = [];
    for (var i = s.length - 1; i > -1; i--) {
        arr[i] = []
        for (var j = 0; j < s.length; j++) {
            if (i > j) continue;
            if (i === j) {
                arr[i][j] = true;
                if (!res) res = s.slice(i, j)
                continue;
            }
            if (i + 1 === j) {
                arr[i][j] = s[i] === s[j];
                if (arr[i][j] && (j - i + 1) > res.length) res = s.slice(i, j+1)
                continue;
            }
            console.log(s[i] === s[j], arr[i + 1][j - 1]);
            arr[i][j] = s[i] === s[j] && arr[i + 1][j - 1];
            if (arr[i][j] && (j - i + 1) > res.length) res = s.slice(i, j+1)
        }
    }
    console.log(arr)
    return res
}
