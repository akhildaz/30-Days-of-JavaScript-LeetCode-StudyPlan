// in javascript, we can also make arrays of functions and compose them together
// to create a new function that applies each function in sequence


// ******************************************************

// function add(args) {
//     return args[0] + args[1];
// }

// function mulTwo(val) {
//     return val * 2;
// }

// function square(val) {
//     return val * val;
// }

// function addSquareMulTwo(args) {
//     return square(mulTwo(add(args[0], args[1])));
// }

// addSquareMulTwo(2, 3); // ((2 + 3) * 2) ^ 2 = 100

// const result1 = addSquareMulTwo(2, 3);
// console.log(result1); // 100


// ******************************************************

// const result = square(mulTwo(add(2, 3))); // ((2 + 3) * 2) ^ 2 = 100
// console.log(result); // 100 

// ******************************************************

// compose function follows function within function pattern

// function compose(f1, f2, f3) {
//     return function (a, b) {
//         return f3(f2(f1(a, b)));
//     }
// }

// modern way using arrow functions
// const compose = (f1, f2, f3) => (a, b) => f3(f2(f1(a, b)));

// ******************************************************

// const composedFunctionResult = compose(add, mulTwo, square)(2, 3);
// console.log(composedFunctionResult); // 100

// const composedFunctionResult = compose(add, mulTwo, square);
// console.log(composedFunctionResult(2, 3)); // 100

// ******************************************************

// we can also create a more generic compose function that takes an array of functions

// function composeMultiple(...fns) {
//     return function (...values) {
//         return fns.reduce((acc, fn) => fn(acc), values);
//     }
// }

// modern way using arrow functions
// const composeMultiple = (...fns) => (...values) => fns.reduce((acc, fn) => fn(acc), values);

// ******************************************************

// const composedMultipleResult = composeMultiple(add, mulTwo, square)(2, 3);
// console.log(composedMultipleResult); // 100

// const composedMultipleResult = composeMultiple(add, mulTwo, square);
// console.log(composedMultipleResult(2, 3)); // 100

// ******************************************************

var compose = function (functions) {

    return function (x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    }
};

// Example usage:
const functions = [
    function (x) { return x + 1; },
    function (x) { return x * 2; },
    function (x) { return x - 3; }
];

const composedFunction = compose(functions);
console.log(composedFunction(5)); // Output: 5  

// Explanation:
// Step 1: Start with input 5
// Step 2: Apply the last function: 5 - 3 = 2
// Step 3: Apply the second function: 2 * 2 = 4
// Step 4: Apply the first function: 4 + 1 = 5
// Final output is 5

// ******************************************************