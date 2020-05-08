//...spread
const a = [1, 2, 3];
const b = [0, ...a, 4];
console.log(a,b);

// function total(...arr) {
//     console.log(arr.map((i) => i*2));
// }
// total(...b);


// Shallow-cloning
const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: {
        e: 10
    }
};
//Problem
let obj2 = JSON.parse(JSON.stringify(obj1));
// for (let key in obj1) {
//     obj2[key] = obj1[key];
// }
obj2.d.e = 50;
console.log({ obj2, obj1 });

// Solve
let obj3 = {
    ...obj1,
    f: 500
}
obj3.d.e = 100;
console.log({ obj1, obj3 });