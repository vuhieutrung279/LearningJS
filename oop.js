// constructor function
class Mouse {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`${this.name} running`);
    }
}

const mouse = new Mouse('Trung');
mouse.run();

//---------------------
// inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Bird extends Animal {
    fly() {
        console.log('Flying...',this.name);
    }
}
const bird = new Bird("Bird");
bird.fly();

//------------------------
// method overriding
class CoffeeMachine {
    makeCoffee() {
        console.log("Making coffee...");
    }
}

class SpecialCoffeeMachine extends CoffeeMachine {
    makeCoffee(cb) {
        console.log('make mocha coffee');
        cb();
    }
}

const mocha = new SpecialCoffeeMachine();
mocha.makeCoffee(() => {
    console.log("Call me");
})


//-----------------
// super
class Hero {
    constructor(name, hp, damage) {
        this.name = name;
        this.hp = hp;
        this.damage = damage;
    }

    applyDamage(damage) {
        this.hp -= damage;
    }

    attack(enemy) {
        enemy.applyDamage(this.damage);
    }
}


class RangedHero extends Hero { // subClass
    constructor(name, hp, damage, range) {
        super(name, hp, damage);
        this.range = range;
    }

    attack(enemy) {
        super.attack(enemy);
        this.hp += this.damage;
    }
}
const heroRange = new RangedHero("Hieu", 100, 10, 100);


const heroB = new Hero('Vu', 200, 5);
console.log({ 
    heroRange, 
    heroB
});// heroA: heroA, heroB: heroB
heroRange.attack(heroB);
console.log({ 
    heroRange, 
    heroB
});


//-------------------
// static
class Foo {
    static someMethod() {
        console.log('some method');
    }
    anotherMethod() {
        console.log("another method");
    }
}
// 1
Foo.someMethod();

// 2
const foo = new Foo(); // instance
foo.anotherMethod();