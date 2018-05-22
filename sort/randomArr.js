function getRandomItem(arr, num) {
    let sum = arr.length;
    let res = [];
    for (let k = 0; k < sum; k++) {
        let r = Math.floor(Math.random() * (sum - k)) + 1;
        let temp = arr[k];
        arr[k] = arr[r];
        arr[r] = temp
    }
    for (let len = num; len > 0;len --) {
        if (len === 1) {
            res.push(arr)
        } else {
            let r = Math.floor(Math.random() * (sum - len)) + 1;
            res.push(arr.splice(0, r));
            sum -= r;
        }
    }
    return res
}
