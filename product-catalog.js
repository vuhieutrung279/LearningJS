var products = [
    { name: "A", unitPrice: 100, quantity: 3, category: "Screen"},
    { name: "B", unitPrice: 200, quantity: 20, category: "PC"},
    { name: "C", unitPrice: 300, quantity: 1, category: "Table"},
    { name: "D", unitPrice: 500, quantity: 15, category: "PC"},
    { name: "E", unitPrice: 400, quantity: 25, category: "Table"},
    { name: "F", unitPrice: 100, quantity: 35, category: "Screen"},
    { name: "G", unitPrice: 500, quantity: 40, category: "Screen"},
    { name: "H", unitPrice: 400, quantity: 45, category: "Table"},
    { name: "I", unitPrice: 200, quantity: 50, category: "Screen"},
    { name: "J", unitPrice: 100, quantity: 55, category: "PC"},
]
// 1. Filter các sản phẩm trong một category nào đó
function filterOnCategory(product) {
    console.log(products.filter(function(item) {
        return item.category == product
    }))
}
filterOnCategory("Screen");

// 2. Tính tổng số tiền hàng còn trong kho
console.log(products.reduce(function(totalPrice, item) {
    return totalPrice + item.quantity*item.unitPrice;
},0))
// 3. Chọn ra các sản phẩm có tiền hàng tồn lớn (tổng trên 500)
console.log(products.filter(function(item) {
    return item.quantity*item.unitPrice > 500
}))