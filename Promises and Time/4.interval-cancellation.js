// setInterval

// function greet() {
//     console.log("Hello, World!");
// }

// const result = setInterval(greet, 1000);

// setTimeout(() => {
//     clearInterval(result);
// }, 5000);

var cancellable = function (fn, args, t) {
    fn(...args);
    let timer = setInterval(() => {
        fn(...args);
    }, t);

    let cancelFn = () => {
        clearInterval(timer);
    }
    return cancelFn;
};
