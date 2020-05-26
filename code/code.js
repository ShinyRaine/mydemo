// 交换链表中的节点
var test = {
    val: 1,
        next: {
        val: 2,
            next: {
            val: 3,
                next: {
                val: 4,
                    next: null
            }
        }
    }
}
var swapPairs = function (head) {
    let conter = 1;
    let temp = head;
    let res = head;

    while (temp && temp.next) {
        if (conter % 2) {
            let val = temp.val
            temp.val = temp.next.val
            temp.next.val = val
        }


        conter = conter + 1;
        temp = temp.next;
    }
    return res
};
swapPairs(test);

// 乘积最大子数组

var maxProduct = function (nums) {
    var max = -Infinity;
    var len = nums.length;
    for (let i = 0; i < len + 1; i++) {
        for (let j = i + 1; j < len + 1; j++) {
            var arr = nums.slice(i, j);
            var p = arr.reduce((s, current) => s * current, 1);
            if (p > max) max = p
        }
    }
    return max;
};
// 时间过长而失败

// 动态规划方法
var maxProduct = function (nums) {
    var maxArr = [nums[0]];
    var minArr = [nums[0]];
    var len = nums.length;
    for (let i = 0; i < len; i++) {

        maxArr[i] = Math.min(nums[i], nums[i] * maxArr[i - 1], nums[i] * minArr[i - 1]);
        minArr[i] = Math.max(nums[i], nums[i] * maxArr[i - 1], nums[i] * minArr[i - 1]);
    }
    return Math.max(...maxArr);
};
// 时间过长
// 按照提示优化如下
var maxProduct = function (nums) {
    var maxArr = nums[0];
    var minArr = nums[0];
    var res = nums[0];
    var len = nums.length;
    for (let i = 1; i < len; i++) {
        let temp1 = maxArr;
        let temp2 = minArr;
        maxArr = Math.max(nums[i], nums[i] * temp1, nums[i] * temp2);
        minArr = Math.min(nums[i], nums[i] * temp1, nums[i] * temp2);

        if (maxArr > res) res = maxArr
    }
    return res;
};


// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
var validPalindrome = function (s) {
    var arr = s.split('');
    if (arr.reverse().join('') === s) return true;
    for (var i = 0; i < s.length; i++) {
        var arr2 = s.split('');
        arr2.splice(i, 1)
        var s2 = arr2.join('')
        if (arr2.reverse().join('') === s2) return true;
    }
    return false;
};
// 时间过长而失败
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let mid = Math.floor(s.length / 2);
    let i = 0, j = s.length - 1;

    while (i <= mid) {
        if (s[i] === s[j]) {
            i++;
            j--;
        } else {

            let arr = s.split('')
            arr.splice(i, 1)
            s1 = arr.join('');
            let arr2 = s.split('')
            arr2.splice(j, 1)
            s2 = arr2.join('');
            return validPalind(s1) || validPalind(s2)
        }
    }
    return true;
};

var validPalind = function (s) {
    let mid = Math.floor(s.length / 2);
    let i = 0, j = s.length - 1;

    while (i <= mid) {
        if (s[i] === s[j]) {
            i++;
            j--;
        } else {
            return false
        }
    }
    return true;
}
