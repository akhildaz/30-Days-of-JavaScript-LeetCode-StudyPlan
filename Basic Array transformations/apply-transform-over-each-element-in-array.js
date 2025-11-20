// constructor array

// const arr = new Array(2, 3, 4, 5); // output: [2, 3, 4, 5]
// console.log(arr);

// ***********************************************************

// const arr1 = new Array(4); // output: [ <4 empty items> ]

// arr1[0] = 2;
// arr1[1] = 3;
// arr1[2] = 4;
// arr1[3] = 5;

// console.log(arr1); // output: [2, 3, 4, 5]

// ***********************************************************

// array literals

// const arr2 = [2, 3, 4, 5]; // output: [2, 3, 4, 5]
// console.log(arr2);

// ***********************************************************

// in javaScript, arrays can hold multiple data types

// const arr3 = [2, 'hello', true, null, undefined, {name: 'John'}, [1, 2, 3]];
// console.log(arr3);
// output: [ 2, 'hello', true, null, undefined, { name: 'John' }, [ 1, 2, 3 ] ]

// ***********************************************************

// How to traverse an array

// const arr4 = [2, 3, 4, 5];

// for loop
// for (let i = 0; i < arr4.length; i++) {
//     console.log(arr4[i]);
// }

// for...of loop
// for (const value of arr4) {
//     console.log(value);
// }

// forEach method
// arr4.forEach((value) => {
//     console.log(value);
// });

// output:
// 2
// 3
// 4
// 5

// ***********************************************************

// some methods which can be applied on array literals

// map method creates a new array by applying a function on each element of the array, returning the results in a new array. Also, it does not modify the original array.

// const arr5 = [2, 3, 4, 5];

// const mappedArr = arr5.map(multiplyByTwo);

// function multiplyByTwo(num) {
//     return num * 2;
// }

// const newMappedArr = arr5.map((value) => {
//     return value * 7;
// })
// console.log(newMappedArr); // output: [14, 21, 28, 35]

// console.log(mappedArr); // output: [4, 6, 8, 10]
// console.log(arr5); // output: [2, 3, 4, 5]

// ***********************************************************

// array.map(function(currentValue, index, array)) syntax

// currentValue: The current element being processed in the array.
// index (Optional): The index of the current element being processed in the array.
// array (Optional): The array map was called upon.

// ***********************************************************

var map = function (arr, fn) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr[i] = fn(arr[i], i);
    }
    return newArr;
}

// now you can use this map function like the built-in map method

const arr6 = [1, 2, 3, 4];

const result = map(arr6, (value, index) => {
    return value + index;
});

console.log(result); // output: [1, 3, 5, 7]
