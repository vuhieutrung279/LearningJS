var fs = require("fs");

// var text = fs.readFileSync("./song.txt", {encoding: "utf8"});
// console.log(text);

// fs.writeFileSync("./song2.txt","Augustine")

var readlineSync = require('readline-sync');
// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
 
// // Handle the secret text (e.g. password).
// var favFood = readlineSync.question('What is your favorite food? ', {
//   hideEchoBack: true // The typed text on screen is hidden by `*` (default).
// });
// console.log('Oh, ' + userName + ' loves ' + favFood + '!');


// 1.Show all students
// 2.Create a new students
// 3.Save & Exit

var lStudent = fs.readFileSync("./data.json", {encoding: "utf8"});
var newListStudents = JSON.parse(lStudent);





var option = readlineSync.question("1.Show all students\n2.Create a new students\n")
var oNewStudent = {
    
}
switch (option) {
    case "1":
        console.log(newListStudents);
        break;
    case "2": 
        var sName = readlineSync.question("Your Name: ");
        var sAge = readlineSync.question("Your Age: ");
        var sClass = readlineSync.question("Your Class: ");
        oNewStudent = {
            name : sName,
            age : parseInt(sAge),
            classes : sClass
        }
        newListStudents.push(oNewStudent)
        console.log(newListStudents);
        newListStudents = JSON.stringify(newListStudents)
        fs.writeFileSync("./data.json", newListStudents)
        break;

    default:
        break;
}

