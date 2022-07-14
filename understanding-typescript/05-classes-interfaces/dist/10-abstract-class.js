"use strict";
class Parent {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(this.name);
    }
}
class Child extends Parent {
}
const childObj = new Child("Hello");
childObj.printName();
