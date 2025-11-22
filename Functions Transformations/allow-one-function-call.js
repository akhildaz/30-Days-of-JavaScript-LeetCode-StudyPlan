var once = function (fn) {
    let called = false;

    return function (...args) {
        if (called) return undefined;
        called = true;
        return fn(...args);
    }
};

// Example usage:
const add = (a, b) => a + b;
const addOnce = once(add);

console.log(addOnce(2, 3)); // Output: 5
console.log(addOnce(4, 5)); // Output: undefined
console.log(addOnce(6, 7)); // Output: undefined