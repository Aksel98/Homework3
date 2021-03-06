// 1
function getOddNumber(n) {
    if (n.toString().length > 1) {
        n = n.toString();
        return Number(n) % 2 === 0 ? false : getOddNumber(Number(n.substring(0, n.length - 1)))
    } else {
        return n % 2 !== 0
    }
}

// 2
function minPosValue(arr) {
    arr = arr.filter(n => n > -1);

    if (arr.length === 0) {
        return -1
    } else if (arr.length === 1) {
        return arr[0];
    } else if (arr[0] > arr[1]) {
        return minPosValue(arr.slice(1))
    } else {
        let c = arr[0];
        arr[0] = arr[1];
        arr[1] = c;
        return minPosValue(arr.slice(1))
    }
}

// 3
function fibonacciNums(n) {
    if (n === 0) {
        return []
    } else if (n === 1) {
        return [1]
    } else if (n === 2) {
        return [1, 1]
    } else {
        let arr = fibonacciNums(n - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr
    }
}

// 4
function concatArr(arr) {
    arr = arr.reduce((current, el) => {
        return current.concat(typeof el === 'object' ? concatArr(el) : el);
    }, []);
    return arr
}

// 5
function sumOfDigits(n, m = 0) {
    if (n === 0 && m.toString().length > 1) {
        n = m;
        m = 0;
        return sumOfDigits(n, m)
    } else {
        return n === 0 && m.toString().length === 1 ? m : sumOfDigits(parseInt(n / 10), m += n % 10);
    }
}