var fs = require("fs");
var co = require("co");

// var read = fs.readFileSync("./text1.txt", "utf8");
// console.log(read);

// console.log("Start");
// fs.readFile("./text2.txt","utf8",function(err,data){
//     console.log(data);
// });
// console.log("End");


//---------------------------------------------------------------
//node co
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

co(function*(){
    //Cach 1
    // var text1 = yield readFilePromise("./text1.txt");
    // var text2 = yield readFilePromise("./text2.txt");
    // var text3 = yield readFilePromise("./text3.txt");
    // return [text1,text2,text3];
    //Cach 2
    var values = yield [
        readFilePromise("./text1.txt"),
        readFilePromise("./text2.txt"),
        readFilePromise("./text3.txt")
    ];
    return values;
}).then(function(values){
    console.log(values)
}).catch(function(error){
    console.log(error);
})


var readFiles = co.wrap(function*(files){
    // [String] --> [Promise]
    var values = yield files.map(function(x){
        return readFilePromise(x);
    })
    return values;
});

readFiles(["text1.txt","text2.txt","text3.txt"])
    .then(function(values){
        console.log(values);
    });

//---------- async await
async function run() {
    var text1 = await readFilePromise("./text1.txt");
    var text2 = await readFilePromise("./text2.txt");
    var text3 = await readFilePromise("./text3.txt");
    
    return [text1,text2,text3];
}
run().then(function(values){
    console.log(values)
});