class Department {
  private name: string;
  private employee: string[] = [];

  constructor(name: string) {
    this.name = name;
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

const accounting = new Department("Accounting");
accounting.getName();
accounting.addEmployee("Max");
accounting.addEmployee("Fritz");
accounting.printEmployee();

// accounting.employee[0]; // this is an error, as I made employee should be private
// accounting.method(); // this again will cause error as the method "method" is private.
// JavaScript also doesn't have private-public declarations, it's quite different.
