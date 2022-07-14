// interface describes how a class should look like, it's almost like a custom type of an object, we won't have values or stuff like that, just type definitions.

interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

// we can use to type-check an object

let user1: Person;
user1 = {
  name: "Raaj",
  age: 19,
  greet(phrase) {
    console.log(`${phrase} ${this.name}`);
  },
};

user1.greet("Hi there, ");
