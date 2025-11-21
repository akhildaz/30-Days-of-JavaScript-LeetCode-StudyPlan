// reduce method to transform an array of numbers into an object
// where keys are the numbers and values are their squares.

// syntax:
// array.reduce(function(accumulator, currentValue, index, array), initialValue)

// accumulator: The accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
// currentValue: The current element being processed in the array.
// index (Optional): The index of the current element being processed in the array.
// array (Optional): The array reduce was called upon.
// initialValue (Optional): A value to use as the first argument to the first call of the callback.

// example:

// const numbers = [1, 2, 3, 4, 5];

// const squaredObject = numbers.reduce(function(accumulator, currentValue) {
//     accumulator[currentValue] = currentValue * currentValue;
//     return accumulator;
// }, {});

// console.log(squaredObject); 
// output: { '1': 1, '2': 4, '3': 9, '4': 16, '5': 25 }

// ***********************************************************

// let arr = [10, 20, 30, 40];

// let sum = arr.reduce(addNum);

// function addNum(accumulator, currentValue) {
//     return accumulator + currentValue;
// }

// console.log(sum); 
// output: 100

// ***********************************************************

var reduce = function(nums, fn, init) {
    let total = init;

    for (let i = 0; i < nums.length; i++) {
        total = fn(total, nums[i]);
    }

    return total;
};