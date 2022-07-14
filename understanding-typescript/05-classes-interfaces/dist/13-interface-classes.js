"use strict";
// interfaces is used more that types with objects.
// interface is more of a contract a class must adhere to inorder to work.
class GreetableClass {
    constructor(name) {
        this.name = name;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const obj = new GreetableClass("Raaj");
obj.greet("Hello there,");
