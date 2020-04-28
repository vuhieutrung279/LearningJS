var fs = require("fs");
var readlineSync = require('readline-sync');
function writeFile(list) {
    list = JSON.stringify(list)
    fs.writeFileSync("./list-contact.json", list)
}
var listContact = fs.readFileSync("./list-contact.json", {encoding: "utf8"});
var newListContact = JSON.parse(listContact);
function main(){
    console.log("1. Nhập dữ liệu contact (name, phone number)");
    console.log("2. Sửa dữ liệu contact");
    console.log("3. Xoá contact");
    console.log("4. Tìm kiếm contact");
    var choose = readlineSync.question(">");
    switch (choose) {
        case "1":
            enterContact();
            break;
        case "2":
            
            break;
        case "3":
            deleteContact();
            break;
        case "4":
            findPhone();
            break;
        default:
            main();
            break;
    }
}

function enterContact() {
    var name = readlineSync.question("Your Name: ");
    var phone = readlineSync.question("Your Phone: ");
    var itemContact = {
        name: name,
        phone: phone
    }
    newListContact.push(itemContact);
    writeFile(newListContact)
    console.log(newListContact)
}

function deleteContact() {
    console.log(newListContact)
    var itemDelete = readlineSync.question("Enter phone you want to delete: ");
    newListContact = newListContact.filter(function(item){
        return !item.phone.includes(itemDelete)
    });

    writeFile(newListContact)
    console.log(newListContact)
}
function findPhone() {
    var item = readlineSync.question("Enter your name or phone which want to find: ");
    console.log(newListContact.filter(function(x){
        return x.name.toLowerCase().includes(item.toLowerCase()) || x.phone.toLowerCase().includes(item.toLowerCase())
    }));
}
main();
