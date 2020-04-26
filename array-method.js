
var rectangles = [
  { width: 10, height: 5 },
  { width: 20, height: 30 },
  { width: 4, height: 16 },
];

// array.map
console.log(
  rectangles.map(function (x) {
    return x.width + x.height;
  })
);

// array.filter
console.log(
  rectangles.filter(function (x) {
    return x.height > 15;
  })
);

// array.reduce
// reduce Eg 1
var orders = [
  { name: 'Macbook', quantity: 2, unitPrice: 3000 },
  { name: 'Laptop', quantity: 5, unitPrice: 4000 },
  { name: 'PC', quantity: 3, unitPrice: 5000 }
]; 
console.log(
  orders.reduce(function(iTotal, item){
    return iTotal += item.quantity * item.unitPrice
  },0)
);
// reduce Eg 2
var items = ['Trung', 'Augustine', 'Anna']
console.log(
  items.reduce(function(lItems, item){
    return lItems + "<" + item + ">"
  },"")
);
console.log(
  items.map(function(item){
    return "<" + item + ">"
  }).join("")
);
