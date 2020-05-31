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

// function first(array, n) {
//     var newArr = [];
//     if (n <= 0) newArr = [];
//     else {
//         for (var i = 0; i < n; i++) {
//             if (array[i] == undefined) {
//                 break;
//             }
//             else {
//                 newArr.push(array[i]);
//             }
//         }
//     }
//     return newArr;
// }

// console.log(first([7, 9, 0, -2], 6))

// function omitCharAt(str, n) {
//     var newStr = str.split('');
//     newStr.splice(n, 1);
//     return newStr.join();
// }
// console.log(omitCharAt("Hello Quang Dat", 8));
  
// function nearestTo100(a, b){
//     if (Math.abs(100 - a) < Math.abs(100 - b)) return a;
//     return b;
// }
// console.log(nearestTo100(89, 189));

// function pyString(String) {
//     if (String.includes('Py')) return String;
//     else {
//         return "Py" + String;
//     }
// }
// console.log(pyString("Hello"));

// function checkInt(number1, number2) {
//     if ((number1 > 0 && number2 < 0) || (number1 < 0 && number2 > 0)) return true;
//     else false;
// }
// console.log(checkInt(2, -6))

// function difference(n) {
//     if (n < 13) {
//         return Math.abs(13 - n);
//     }
//     else {
//         return Math.abs(13 - n)*2;
//     }
// }
// console.log(difference(5));

// function toNextChar(str) {
//     var newStr = str.split('');
//     var newMap = newStr.map(function(item){
//         return (String.fromCharCode((item.charCodeAt(0))+1));
//     })
//     return newMap.join('');
// }
// console.log(toNextChar('abc'));

// function newString(str, n){
//     var newStr = str.split('');
//     var newArr1 = [];
//     var newArr2 = [];
//     for (var i = 0; i < n; i++) {
//         newArr1.push(newStr[i]);
//         newArr2.unshift(newStr[newStr.length-1-i]);
//     }    
//     return (newArr1.concat(newArr2)).join('');
// }
// console.log(newString('gsdrw4rfergf45gs',3));

// function maxOfSumChain(arr,k){
//     // write code here.
//     var newSort = arr.sort(function(a, b){
//         return b - a;
//     })
//     var newFilter = newSort.filter(function(item, index){
//         return newSort.indexOf(item) === index;
//     })
//     var sum = 0;
//     for (var i = 0; i < k; i++) {
//         sum+= newFilter[i];
//     }
//     return sum;
// }
// console.log(maxOfSumChain([1,3,2,6,2],3));

function findMostFrequent(arr) {
    // var newArr = [];
    // var check = 0;
    // var max = 0;
    // for (var i = 0; i < arr.length; i++) {
    //     for (var j = 0; j < arr.length; j++) {
    //         if (arr[i] === arr[j]) check++;
            
    //     }
    //     if (check > 1)  {
    //         newArr.push(arr[i]);
    //     }
    //     check = 0;
    // }
    // var newArr2 = [];
    // for (var i = 0; i < newArr.length; i++) {
    //     for (j = 0; j < newArr.length; j++) {
    //         var count = 0;
    //         if (newArr[i] === newArr[j]) {
    //             count++;
    //         }
    //     }
    // }
    var kq=[0,0,0,0,0,0,0,0,0,0];
 
    for(var i = 0; i < arr.length; i++) {
        kq[arr[i]] = kq[arr[i]] + 1;
        console.log(kq[arr[i]])
    }

    var max=0;
    for (var i = 0; i < kq.length; i++) {
        if (kq[i] != NaN) {
            if (max < kq[i]) max = kq[i];
        }
    }
        
    var result = [];
    for (var i = 0; i < kq.length; i++) {
        if (kq[i] != NaN) {
            if (max == kq[i]) result.push(i);
        }
    }
    return result;

}
console.log(findMostFrequent([1,2,3,4,1,2,2,1]));    

// function rearrangeChar(str1, str2) {
//     var newStr1 = str1.split('');
//     var newStr2 = str2.split('');
//     if (newStr1.sort().join('') === newStr2.sort().join('')) return true;
//     else return false;
// }
// console.log(rearrangeChar('yhnbgt','hybtgn'));    

// function findmaxDiff(arr){
//     var max=0;
//     for (var i = 0;i < arr.length-1; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if (max < Math.abs(arr[i]-arr[j]))
//                 max = Math.abs(arr[i]-arr[j]);
//         }
//     }
//     return max;
// }
// console.log(findmaxDiff([13, 2, 3, 8, 9]));

// function chunkArrayInGroups(arr, size){
//     var mainArr = [];
//     var subArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         subArr.push(arr[i]);
//         if ((i+1)%size === 0 || i == arr.length-1) {
//             mainArr.push(subArr);
//             subArr = []
//         } 
//     }
//     return mainArr;
// }
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
