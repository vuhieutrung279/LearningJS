// global context
// function context
// bind

var mouse = {
    name: 'Mickey',
    sayHi: function() {
        console.log("Hi, My name is", this.name);
    }
};
//mouse.sayHi();

var dog = {
    name: "Ki"
}

var say = mouse.sayHi.bind(dog);
say();


var run = (cb) => {
    console.log('run...');
    cb();
}

run(mouse.sayHi.bind(mouse));