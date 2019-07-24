/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in global scope this will bind the window/gobal.
* 2. Implicit binding, when a method is called the object behind the period is this.
* 3. New binding, when a constructor function is called this refers to specific instance of object that is created.
* 4. Explicit binding, when call, apply, or bind is used this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this.Document);

// Principle 2

// code example for Implicit Binding

const person = {
    name: "Daniel",
    speak: function() {
        console.log(`My name is ${this.name}`);
    }
}

person.speak();

// Principle 3

// code example for New Binding

function Person(a) {
    this.name = a.name
};

Person.prototype.speak = function() {
    console.log(`My name is ${this.name}`);
};

const person1 = new Person({
    name: "Daniel"
});

person1.speak();


// Principle 4

// code example for Explicit Binding

function speak() {
    console.log(`My name is ${this.name}`);
}

const dan = {
    name: "Daniel"
}

speak.call(dan);