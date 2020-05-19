// Variables
var a = 5;
var b = 10;
var d;
c = a + b;
console.log(c, d);

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

