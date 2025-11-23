// synchronous = Executes code line by line consecutively in a sequential manner.
// Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be performed concurrently without waiting.
// Doesn't block the execution flow and allows the program to continue.
// (I/O operations, network requests, fetching data)
// Handled with callbacks, promises, async/await

// promises

// const myPromise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async Task");
//         resolve();
//     }, 2000)
// })

// myPromise.then(function () {
//     console.log("Promise Resolved!");

// })

// const myPromise = new Promise(function (resolve, reject) {
//     let fileLoader = false;
//     if (fileLoader) {
//         resolve("File Loaded");
//     } else {
//         reject("File not Loaded");
//     }
// })

// myPromise.then(function (value) {
//     console.log(value);

// }).catch(error => console.log(error)
// )


// resolve() is handled by .then() & reject() is handled by .catch()

// async/await 
// async makes a function return a promise
// await makes an async function wait for a promise

// function loadFile() {
//     return new Promise((resolve, reject) => {
//         let fileLoader = false;
//         if (fileLoader) {
//             resolve("File loaded");
//         } else {
//             reject("File not loaded");
//         }
//     })
// }

// async function myFunction() {
//     try {
//         const value = await loadFile();
//         console.log(value);
//     } catch (error) {
//         console.log(error);
//     }

// }

// myFunction();

var addTwoPromises = async function (promise1, promise2) {
    const [val1, val2] = await Promise.all([promise1, promise2]);
    return val1 + val2;
};