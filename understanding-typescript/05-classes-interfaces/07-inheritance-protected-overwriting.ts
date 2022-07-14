// Inheritance

class Department {
  protected employee: string[] = [];

  constructor(private name: string, private id: string) {}

  getName() {
    console.log("Department Name: " + this.name);
  }

  addEmployee(empName: string) {
    this.employee.push(empName);
  }

  printEmployee() {
    console.log(this.employee.length);
    console.log(this.employee);
  }
}

// can't inherit from multiple classes

class ItDepartment extends Department {
  // look, having id alone without public or private means, 'id' is a parameter, having access modifiers makes it a data field, therefore if you add access modifiers it'll be weird.
  // must use this only after using super
  constructor(id: string, public admins: string[] = []) {
    super("It Department", id);
  }

  addEmployee(empName: string): void {
    this.employee.push(empName);
  }
}

// now this actually works because we're inheriting everything that Department has to offer

const it = new ItDepartment("12", ["Fritz", "Max", "Jenifer"]);
it.getName();
it.addEmployee("Max");
it.addEmployee("Fritz");
it.printEmployee();
console.log(it); // will print all the data fields

// doubt
// -----
// class Parent{
//   constructor(private aPrivateField: string, public aPublicField: string){

//   }
// }

// class Child extends Parent {
//   constructor(private aPrivateField: string, public aPublicField: string){
//     super(aPrivateField, aPublicField);
//   }
// }
