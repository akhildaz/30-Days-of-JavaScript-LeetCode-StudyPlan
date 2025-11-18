// A closure in JavaScript is a function that retains access to variables from its outer (enclosing) function's scope, even after the outer function has finished executing.
//  This allows the inner function to "remember" and access variables from the parent scope, creating a persistent environment.

var createCounter = function(n) {
    let count = n;
    return function() {
        return count++;
    }
}

// another way to write

// var createCounter = function(n) {
//     return function() {
//         return n++;
//     }
// }

const result = createCounter(10);
console.log(result()); // 10
console.log(result()); // 11
console.log(result()); // 12