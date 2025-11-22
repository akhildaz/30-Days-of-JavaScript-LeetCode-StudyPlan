// memoization function

function square(n) {
    return n * n;
}

// console.time("First call to square(5)");
// console.log(square(5));
// console.timeEnd("First call to square(5)");

// console.time("Second call to square(5)");
// console.log(square(5));
// console.timeEnd("Second call to square(5)");

// Memoization implementation

function memoize(fn) {
    let cache = {};

    return function (...args) {
        let key = JSON.stringify(args);

        if (key in cache) {
            return cache[key];
        } else {
            let result = fn.apply(this, args);
            cache[key] = result;
            return result;
        }
    }
}

const memoizedSquare = memoize(square);

console.time("First call to memoizedSquare(5)");
console.log(memoizedSquare(5));
console.timeEnd("First call to memoizedSquare(5)");

console.time("Second call to memoizedSquare(5)");
console.log(memoizedSquare(5));
console.timeEnd("Second call to memoizedSquare(5)");

console.time("Call to memoizedSquare(6)");
console.log(memoizedSquare(6));
console.timeEnd("Call to memoizedSquare(6)");

console.time("Second call to memoizedSquare(6)");
console.log(memoizedSquare(6));
console.timeEnd("Second call to memoizedSquare(6)");    

// The memoized function should be significantly faster on repeated calls with the same arguments.