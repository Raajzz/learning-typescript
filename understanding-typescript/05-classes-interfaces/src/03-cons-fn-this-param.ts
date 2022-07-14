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

// error

const accountingCopy = { describe: accounting.describe };
// console.log(accountingCopy.describe()); // would produce undefined | after adding this param with type, will produce an error

// Now, this is an error which wasn't caught by TS, therefore what we can do is to add a dummy parameter in the function, after adding in the function we have to make accountingCopy similar to department (Like, providing all the fields and methods, that'll make TS understand whatever being done will be correct)

const accountingCopyTwo = { name: "DUMMY", describe: accounting.describe };

console.log(accountingCopyTwo.describe());
