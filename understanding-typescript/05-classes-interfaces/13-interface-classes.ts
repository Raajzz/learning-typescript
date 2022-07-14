// interfaces is used more that types with objects.
// interface is more of a contract a class must adhere to inorder to work.

// abstract class can have implementation, but interfaces is just structure.
// the object name can also have type of interface, therefore it can store an object of a different class which also implements the same interface.

interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class GreetableClass implements Greetable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

const obj = new GreetableClass("Raaj");
obj.greet("Hello there,");
