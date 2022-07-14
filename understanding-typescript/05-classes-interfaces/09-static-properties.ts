// static properties and methods
// Example, Math.PI OR Math.pow() where Math is a class

// static methods aren't accessible inside the class except using <class>.staticField, but inside static functions you can use this.staticField or this.staticFunction.

class Department {
  static fiscalYear = 2022;

  constructor(private name: string) {}

  get getName() {
    if (this.name === "") {
      throw new Error("name property is empty");
    }
    return this.name;
  }

  set setName(name: string) {
    if (!name) {
      throw new Error("Nothing was provided in the parameter");
    }
    this.name = name;
  }

  static createEmployee(name: string) {
    this.fiscalYear;
    return { name };
  }

  static anotherField(name: string) {
    this.createEmployee("Some Name"); // works
  }
}

console.log(Department.createEmployee("Raaj"));
console.log(Department.fiscalYear);
