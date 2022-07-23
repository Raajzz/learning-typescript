// a decorator applies for classes and are functions

// decorators are called when the class is defined, not when you use the class but when it was first defined

// decorators
function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Shane";
  constructor() {
    console.log("Object is created...");
  }
}

const person = new Person();
console.log(person.name);
