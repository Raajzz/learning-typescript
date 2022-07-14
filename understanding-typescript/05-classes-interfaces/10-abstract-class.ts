/*

Force the developers who are working with a certain class to override that method always. You can't provide a default implementation but you enforce that implementation must be provided by the user of the API.

*/

abstract class AbstractClass {
  abstract describe(): string;
  normal() {
    return "Normal from AbstractClass";
  }
}

class NormalClass extends AbstractClass {
  describe(): string {
    return "Inside NormalClass implementation of describe";
  }
}

// const obj1 = new AbstractClass(); // error, cannot create an instance of abstract class

const obj1 = new NormalClass();
console.log(obj1.describe());
console.log(obj1.normal());
