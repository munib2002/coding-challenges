// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     const arr = [0, 1];
//     for (let i = 1; i < n; i++) {
//         arr.push(arr.slice(-2).reduce((a, c) => a + c, 0));
//     }
//     return arr[n];
// }


// function fib(n, arr = [0, 1], i = 1) {
//     if (i === n) return arr[arr.length - 1];
//     arr.push(arr.slice(-2).reduce((a, c) => a + c, 0));
//     return fib(n, arr, ++i)
// }

// function fib(n) {
//     if (n < 2) return n;
//     return fib(n - 1) + fib(n - 2);
// }

function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);

        cache[args] = result;

        return result;
    };
}

function fib(n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);



module.exports = fib;
