// var argumentsLength = function(...args) {
//     return args.length;
// };

// modern solution using rest parameters
const argumentsLength = (...args) => args.length;

// Example usage:
console.log(argumentsLength(1, 2, 3)); // Output: 3
console.log(argumentsLength('a', 'b')); // Output: 2
console.log(argumentsLength()); // Output: 0

// or using the arguments object
// const argumentsLength = function() {
//     return arguments.length;
// };

// Alternatively, using the arguments object in an arrow function (not recommended due to lexical binding of 'this')
// const argumentsLength = () => {
//     return arguments.length; // This will not work as expected in arrow functions
// };

// The rest parameter approach is preferred for its clarity and modern syntax.


// var argumentsLength = function(...args) {
//     let count = 0;
//     for (let i = 0; i < args.length; i++) {
//         count++;
//     }
//     return count;

//     // return args.length;
//     // return arguments.length;

//     // for (let i of args) {
//     //     count++;
//     // }
//     // return count;
// };