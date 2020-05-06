var sum = (a, b) => {
    return a + b;
}
console.log(sum(2,3));

var sum2 = (a, b) => a + b;
console.log(sum2(2, 3));

var square = (x) => x*x;
console.log(square(10));

var square2 = x => x*x;
console.log(square2(11));

var doSomething = () => console.log('Hello');
doSomething();

var arr = [2, 3, 4];
console.log(arr.map(x => x*x));

////////////////////////
var a = {
    name: 'Trung',
    run: function() {
        var run2 = () => {
            console.log(this.name);
        };
        run2();
    }
}

a.run();

var b = {
    foo: 'bar',
    run: function() {
        setTimeout(() => {
            console.log(this.foo);
        }, 2000);
    }
}

b.run();