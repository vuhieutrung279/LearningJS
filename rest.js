function log(a, ...numbers) {
    console.log(a);
    console.log(numbers);
    console.log(arguments);
}

log(2,4,5,6);

function sum(...numbs) {
    return numbs.reduce((a,b) => a+b)
}
console.log(sum(1,2,3,4,5,6,5,3,42,32,3));

function concat(separator, ...strings) {
    return strings.join(separator);
}
console.log(concat("+",1,4,2,32,32,3));