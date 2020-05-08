const arr = [1, 2, 3, 4, 5];
const [a, ...b] = arr;
console.log(a,b);

const obj = {
    e: 1,
    f: 2,
    g: 3
};

const { e, ...g} = obj;
console.log(e,g);