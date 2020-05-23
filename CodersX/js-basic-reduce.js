var orders = [
  { name: "Guitar", quantity: 1, unitPrice: 10000 },
  { name: "Piano", quantity: 2, unitPrice: 20000 },
  { name: "Harmonica", quantity: 3, unitPrice: 30000 },
];

var reduceArr = orders.reduce(function (item, x) {
  return item + x.unitPrice * x.quantity;
}, 0);

console.log(reduceArr);

var items = ["Vu", "Hieu", "Trung"];
var lListItem = items.reduce(function (str, item) {
  return str + "<" + item + ">";
}, "");
console.log(lListItem);

// Given an array of arrays, flatten them into a single array

/**
 * Example:
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 *
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */

function flatten(arr) {
  return arr.reduce(function (listArr, item) {
    return listArr.concat(item);
  }, []);
}

console.log(flatten([["1", "2", "3"], [true], [4, 5, false]]));

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function totalVotes(arr) {
  // write code here...
  return arr.reduce(function (total, vote) {
    return total + vote.voted;
  }, 0);
}

console.log(totalVotes(voters));

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

function arrayTitle(wishlist) {
  // Write code here...
  var arr = [];
  return wishlist.reduce(function (listItem, item) {
    arr.push(item.title);
    return arr;
  }, 0);
}

console.log(arrayTitle(wishlist));

/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/

function countOccurrences(arr) {
  // viết code ở đây.

  return arr.reduce(function (listArray, item) {
    if (item in listArray) {
      listArray[item]++;
    } else listArray[item] = 1;
    return listArray;
  }, {});
}

console.log(countOccurrences(["a", "b", "x", "b", "a"]));

function removeDuplicate(array) {
  // write code here...
  var newArr = [];
  return array.filter(function (item) {
    if (newArr.indexOf(item) == -1) {
      newArr.push(item);
      return true;
    }

    return false;
  });
}

console.log(removeDuplicate([1, 2, 2, 4, 4]));

var students = [
  { name: "A", score: 100 },
  { name: "B", score: 10 },
  { name: "C", score: 101 },
  { name: "D", score: 50 },
  { name: "E", score: 75 },
];

function getTopStudents(students) {
  // Write code here...

  var maxStudent = students.sort(function (student1, student2) {
    return student2.score - student1.score;
  });

  var newArr = maxStudent.slice(0, 3);
  return newArr.map(function (item) {
    return item.name;
  });
}

console.log(getTopStudents(students));

