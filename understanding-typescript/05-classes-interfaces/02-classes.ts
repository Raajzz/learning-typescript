class Department {
  name: string; // field of a class

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");

console.log(accounting);
accounting.describe();

// for ES6 we have a regular class (But without field declaration)
// for ES5 we have an immediately invocable function (because, well, you mustn't put the class thingy to the global object right).
