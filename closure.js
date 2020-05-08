//closure (function return function)
var sum = (a, b) => {
    const c = a + b;
    return function() {
        console.log(c);
    }
}

sum(1, 2)();

