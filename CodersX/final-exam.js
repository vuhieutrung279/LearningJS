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



// function getExtensionFilename(filename) {
//     var index = filename.indexOf('.');
//     return filename.slice(index+1);
//     return newStr;
// }
// console.log(getExtensionFilename('C:\Users\Trung\Desktop\index.html'))


// function findMaxDiff(arr) {
//     if (arr.length <= 1) return 0;
//     else {
//         var max = 0;
//         for (var i = 0; i < arr.length; i++) {
//             console.log(arr[i] - arr[i+1]);
//             if (arr[i] - arr[i+1] > max) max = arr[i] - arr[i+1];
            
//         }
//         return max;
//     } 
// }

// console.log(findMaxDiff([1, -10, 5, 18, -9, 5])
//)


// function equal_pt(str){ 
//     var newStr = str.split('');
//     var p = 0;
//     var t = 0;
//     for (var item of newStr) {
//         if (item == 'p') p++;
//         if (item == 't') t++;
//     }
//     if (p == t) return true;
//     else return false;
// }
// console.log(equal_pt('paatpsts'));

function first(array, n) {
    var newArr = [];
    if (n <= 0) newArr = [];
    else {
        for (var i = 0; i < n; i++) {
            if (array[i] == undefined) {
                break;
            }
            else {
                newArr.push(array[i]);
            }
        }
    }
    return newArr;
}

console.log(first([7, 9, 0, -2], 6))