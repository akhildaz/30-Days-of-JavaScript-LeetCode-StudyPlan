// setTimeout() = function tn JavaScript that allows you to schedule the
// execution of a function after an amount
// of time (milltseconds)
// setTimeOut( callback, delay)

// clearTtmeout() = can cancel a timeout before it triggers

// const createdTimeout = setTimeout(() => {
//     console.time("Time taken: ");
//     console.log("Hello World!");
//     console.timeEnd("Time taken: ");
// }, 3000);

// clearTimeout(createdTimeout);

var cancellable = function (fn, args, t) {
    const cancelFn = function () {
        clearTimeout(timer);
    }

    const timer = setTimeout(() => {
        fn(...args)
    }, t);

    return cancelFn;
};
