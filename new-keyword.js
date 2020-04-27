var tom = {
    name: "Tom",
    stomach: [],
    eat: function(mouse) {
        this.stomach.push(mouse);
        return this;
    }
};

function Mouse(name) {
    this.name = name;
} 

var mouse1 = new Mouse("jerry");
var mouse2 = new Mouse("mickey");
var mouse3 = new Mouse("rocket");

console.log(tom.eat(mouse1).eat(mouse2).eat(mouse3));