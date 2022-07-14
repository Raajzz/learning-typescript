"use strict";
/*

Singleton -> Only one object of a class should be created.

Okay, so what we're gonna do is to create an object inside the class, in order to create the object we're gonna use a static function. Inside the function, we're gonna check and then we either return the object or we'll create the object and then we'll return (happens only once)

*/
class SingletonClass {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    static createInstance(name = "", id = "") {
        if (!this.instance) {
            this.instance = new SingletonClass(name, id);
        }
        return this.instance;
    }
}
const obj1 = SingletonClass.createInstance("SingletonClass", "0001");
const obj2 = SingletonClass.createInstance();
console.log(obj1);
console.log(obj2);
