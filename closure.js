//closure (function return function)
var sum = (a, b) => {
    const c = a + b;
    return function() {
        console.log(c);
    }
}

sum(1, 2)();

// higher order functions (nhận vào tham số là 1 hàm)
function debug(name) {
    return function(str) {
        console.log(`[${name}] ${str}`);
    }
}

const log = debug("Trung");
log("Nothing error");


function waitAndRun(ms, func) {
    setTimeout(func, ms);
}

function run() {
    console.log("Runnnnn");
}

waitAndRun(2000, run);