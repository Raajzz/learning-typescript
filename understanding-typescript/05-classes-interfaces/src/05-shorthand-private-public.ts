// shorthand declaration of private and public
// You're not required to define them above and assign them in the constructor every single time, rather you can just write them inside the constructors params as <access_modifier> <name> : <type>

class Department {
  // private name: string;
  // private employee: string[] = [];

  constructor(private name: string, private employee: string[]) {
    // this.name = name;
  }

  getName(this: Department) {
    console.log("Department Name: " + this.name);
  }

  addEmployee(this: Department, empName: string) {
    this.employee.push(empName);
  }

  printEmployee(this: Department) {
    console.log(this.employee.length);
    console.log(this.employee);
  }

  private method() {
    console.log("This is a private method");
  }
}

const accounting = new Department("Accounting", ["emp1", "emp2", "emp3"]);
accounting.getName();
accounting.addEmployee("Max");
accounting.addEmployee("Fritz");
accounting.printEmployee();

// accounting.employee[0]; // this is an error, as I made employee should be private
// accounting.method(); // this again will cause error as the method "method" is private.
// JavaScript also doesn't have private-public declarations, it's quite different.
