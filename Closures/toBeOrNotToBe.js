// objects is a collection of key value pairs
// closures is a function having access to the parent scope, even after the parent function has closed.

// objects literals
// var obj = {
//     name: "John", // key: value pair
//     age: 30,
//     city: "New York",

//     greet() {
//         return `Hello, my name is ${this.name}`;
//     }
// };

// console.log(obj); // output: { name: 'John', age: 30, city: 'New York' }

// console.log(obj.greet()); // output: Hello, my name is John

// ************************************************

// objects within function

// function calc(val) {
//     let obj = {
//         add(val1) {
//             let result = val + val1;
//             return result;
//         },
//         sub(val1) {
//             let result = val - val1;
//             return result;
//         }
//     }
//     return obj;
// }

// another way to write the above function using closures

// function calc(val) {
//     return {
//         add(val1) {
//             let result = val + val1;
//             return result;
//         },
//         sub(val1) {
//             let result = val - val1;
//             return result;
//         }
//     }
// }

// console.log(calc(7).add(9));
// console.log(calc(7).sub(4));

// output: 16
// output: 3


// *************************************************

// mutltple functions within function

// function calc(val) {

//     function add(val1) {
//         let result = val + val1;
//         return result;
//     }

//     function sub(val1) {
//         let result = val - val1;
//         return result;
//     }

//     // when we have multiple functions, we can create an object and return the object

//     // return obj = {
//     //     add, sub
//     // }

//     return {
//         add, sub
//     }
// }

// ***************************************** 

var expect = function (val) {
    return {
        toBe: function (val1) {
            if (val === val1) {
                return true;
            } else {
                throw new Error(`Expected ${val} to be ${val1}`);
            }
        },
        notToBe: function (val2) {
            if (val !== val2) {
                return true;
            } else {
                throw new Error(`Expected ${val} not to be ${val2}`);
            }
        }
    }
}

// Usage:
console.log(expect(5).toBe(5)); // returns true
console.log(expect(5).notToBe(3)); // returns true

try {
    console.log(expect(5).toBe(3)); // throws Error: Expected 5 to be 3
} catch (error) {
    console.error(error.message);
}

try {
    console.log(expect(5).notToBe(5)); // throws Error: Expected 5 not to be 5
} catch (error) {
    console.error(error.message);
}
