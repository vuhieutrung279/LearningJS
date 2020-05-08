//...spread
const a = [1, 2, 3];
const b = [0, ...a, 4];
console.log(a,b);

function total(...arr) {
    console.log(arr.map((i) => i*2));
}
total(...b);