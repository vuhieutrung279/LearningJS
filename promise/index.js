// var fs = require("promise-fs")

// function onDone(text) {
//     console.log(text);
// }

// function onError(text) {
//     console.log(text);
// }

// function readFile(path) {
//     return fs.readFile(path,"utf8");
// }

// readFile("./text.txt")
//     .then(onDone)
//     .then(function() {
//         return readFile("./text2.txt");
//     })
//     .then(onDone) // Do something with the content
//     .catch(onError) // Handle error

var fs = require("fs");
function readFilePromise(path) {
  return new Promise(function (result, reject) {
    fs.readFile(path, "utf8", function (err, data) {
      if (err) {
        reject(err);
      } else {
        result(data);
      }
    });
  });
}

readFilePromise("text.txt")
  .then(function (text) {
    console.log(text);
  })
  .catch(function (err) {
    console.log(err);
  });

//Promise all
//--- Bad practice
// readFilePromise("./text.txt")
//   .then(function(text1) {
//     console.log(text1);
//     return readFilePromise("./text2.txt");
//   })
//   .then(function(text2) {
//     console.log(text2);
//     return readFilePromise("./text3.txt");
//   })
//   .then(function(text3) {
//     console.log(text3);
//   });

//-- Good practice
Promise.all([
    readFilePromise("./text.txt"),
    readFilePromise("./text2.txt"),
    readFilePromise("./text3.txt")
]).then(function(params) {
    console.log(params)
})