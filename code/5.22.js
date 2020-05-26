
// 钢条切割问题

// 暴力解法
function cut1(p, n) {
    if (n === 0) {
        return 0
    }
    var q = -Infinity;
    p.unshift(0);
    for (var i = 0; i < n; i++) {
        q = Math.max(q, p[i] + cut(p, n - i))
        console.log(q)
    }
    return q
}

// 动态规划解法1
function cut(p, n) {
    var arr = []; // 储存结果的数组
    p.unshift(0);
    for (var i = 1; i <= n; i++) {
        arr = -Infinity
    }
    return cutRodAux(p, n, arr)
}
function cutRodAux(p, n, arr) {
    if(arr[n] > 0) return arr[n];

    var q;
    if (n === 0) {
        q = 0
    } else {
        q = -Infinity;
        for (var i = 1; i <= n; i++) {
            q = Math.max(q, p[i] + cutRodAux(p, n - i, arr))
        }
    }
    arr[n] = q;
    return q;
}

// 动态规划解法2
function cut2(p, n) {
    var arr = []; // 储存结果的数组
    p.unshift(0);
    arr[0] = 0;
    for (let i = 1; i <= n; i++) {
        var q = -Infinity;
        for (let j = 1; j <= i; j++) {
            q = Math.max(q, p[j] + arr[i - j]);
        }
        arr[i] = q
    }
    return arr[n]
}
