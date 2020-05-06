//array-like

//arguments
function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
console.log(sum(5,6,7,10,20));


function arrFrom() {
    const numbers = Array.from(arguments); // convert array-like to array
    return numbers.map(x => x*x);
}
console.log(arrFrom(5,4,3,2,1));