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

// Function 
//-- Variable shadowing
var result = 0;
function sum(a, b) {
  var result; // thêm var vô
  result = a + b;
  return result;
}
console.log(sum(2, 3));
console.log(result);


function addProperty(obj, key, value) {
    obj[key] = value;
    return obj;
  }
  var obj = {};
  var newObj = addProperty(obj, 'name', 'David');
  console.log(obj, newObj);

  function hi() {
    console.log(arguments)
  }
  hi('Ming', 'Lan');


  var rectangles = [
    { width: 10, height: 5},
    { width: 15, height: 50},
    { width: 12, height: 51}
  ]
 

  console.log( rectangles.map(function(x) {
    return x.width*x.height;
  }))

  function Mouse(name) {
    this.name = name;
  }
  
  var tom = {
    name: 'Tom',
    stomach: [],
    eat: function(mouse){
      this.stomach.push(mouse);
      return this;
    }
  }
  
  var m1 = new Mouse("m1");
  var m2 = new Mouse("m2");
  var m3 = new Mouse("m3");
  
  tom.eat(m1).eat(m2).eat(m3)
  console.log(tom);


  var student = {
    name: "Trung",
    sex: "Male",
    age: 24
}

function showInfo(obj) {
  return obj;
}

console.log(showInfo(student));




function removeProp(prop) {
  var student = {
          name : "David Rayy",
          class : "VI",
          rollno : 12
      }
for (var item in student) {
  if (item == prop) delete student[item];
}
return student;
}
console.log(removeProp("name"));


