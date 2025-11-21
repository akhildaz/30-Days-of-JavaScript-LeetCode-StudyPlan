// filter method creates a new array with all elements that pass the test implemented by the provided function. Also, it does not modify the original array.

// syntax:
// array.filter(function(currentValue, index, array))

// currentValue: The current element being processed in the array.
// index (Optional): The index of the current element being processed in the array.
// array (Optional): The array filter was called upon.

// example:

const arr6 = [10, 15, 20, 25, 30, 35, 40];

const filteredArr = arr6.filter(isGreaterThanTwenty);

function isGreaterThanTwenty(num) {
    return num > 20;
}

console.log(filteredArr); // output: [25, 30, 35, 40]
console.log(arr6); // output: [10, 15, 20, 25, 30, 35, 40]

// ***********************************************************

// implementing filter using for loop

function customFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

const arr7 = [5, 12, 18, 24, 30, 36];

const filteredArr2 = customFilter(arr7, function(num) {
    return num % 2 === 0; // filter even numbers
});

console.log(filteredArr2); // output: [12, 18, 24, 30, 36]
console.log(arr7); // output: [5, 12, 18, 24, 30, 36]