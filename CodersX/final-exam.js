// function reverse(str) {
//     var newArr = str.split('');
//     var arrReverse = [];
//     for (var item of newArr) {
//         arrReverse.unshift(item);
//     }
//     return arrReverse.join('');
// }
// console.log(reverse('#$ #@ fh bsk123 @#@!cvcxhb'))

// function capitalize(str) {
//     var newStr = str.split(' ');    
//     var upperString =  newStr.map(function(item){
//         var first = item.charAt(0).toUpperCase();
//         var second = item.slice(1);
//         return first+second;
//     })
//     return upperString.join(' ');
    
// }
// console.log(capitalize('xin chào'));



function getExtensionFilename(filename) {
    var index = filename.indexOf('.');
    var newStr = filename.slice(index);
    return newStr;
}
console.log(getExtensionFilename('C:\Users\Trung\Desktop\index.html'))