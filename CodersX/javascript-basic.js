// Variables
var a1 = 5;
var b1 = 10;
var d1;
c1 = a1 + b1;
console.log(c1, d1);

// Data types
//-BigInt
var bigInt = 123123123123213123213213123123123123221n; 
console.log(bigInt);
//-Symbol
var id = Symbol('111');
console.log(id);
//-null
console.log(typeof(null)) // object;
console.log(typeof(eval)) // function;


// Object
var someKey = 'Augustine';
var obj = {
    [someKey]: 'vu hieu trung'
}
console.log(obj);
console.log(obj.name); // undefined
//-- check exist property
console.log('Augustine' in obj);


// Array
var arr = [];
console.log(typeof arr);
//-- array-like object
var fruits = {
    0: 'lemon',
    1: 'avocado',
    2: 'banana',
    length: 3
}
console.log(fruits[2])



// Operators
var a = 5;
var b = 10;
console.log(a++ * b-- + --a * --b);// 5 * 10 + 5 * 8 = 90