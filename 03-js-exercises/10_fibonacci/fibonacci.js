const fibonacci = function (n) {
    if (n < 0) {return "OOPS"};
    if (n === 0) {return 0};

    let fib = [1, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib.pop();
};

// Do not edit below this line
module.exports = fibonacci;