var createCounter = function (init) {
    var realCount = init;

    return {
        increment: function () {
            return ++init;
        },
        decrement: function () {
            return --init;
        },
        reset: function () {
            return init = realCount;
        }
    }
}

var counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());