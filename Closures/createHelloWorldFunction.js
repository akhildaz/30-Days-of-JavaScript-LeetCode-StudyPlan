// Types of function

// ************************************

// f(a, b) is a function f() with parameters (a, b) whereas f(2, 3) is function f() with arguments (2, 3)

// ************************************

// Normal function 
// function f(a, b) {
//     const sum = a + b;
//     return sum;
// }
// console.log(f(2, 4)); // output: 6

// *************************************

// Anonymous function
// let f = function(a , b) {
//     const sum = a + b;
//     return sum;
// }
// console.log(f(2, 5));  // output: 7

// **************************************

// Immediate Invoke function
// let f = function (a, b) {
//     const sum = a + b;
//     return sum;
// }(2, 7);
// console.log(f); // output: 9

// ****************************************

// Arrow function
// let f = (a, b) => {
//     const sum = a + b;
//     return sum;
// }
// console.log(f(1, 10)); // output: 11

// ******************************************


// function with function

// ******************************************

// one way to write

// function addTwoSum() {
//     function add(a, b) {
//         const sum = a + b;
//         return sum;
//     }
//     return add;
// }

// *****************************************

// another way to write

// function addTwoSum() {
//     return function(a, b) {
//         const sum = a + b;
//         return sum;
//     }
// }

// let result = addTwoSum();
// console.log(result(7, 9)); // Output: 16

// *****************************************

function createHelloWorld() {
    return function() {
        return "Hello World";
    }
}

// const result = createHelloWorld();
// console.log(result()); // Output: Hello World

