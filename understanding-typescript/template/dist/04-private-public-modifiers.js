"use strict";
class Department {
    constructor(name) {
        this.employee = [];
        this.name = name;
    }
    getName() {
        console.log("Department Name: " + this.name);
    }
    addEmployee(empName) {
        this.employee.push(empName);
    }
    printEmployee() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
    method() {
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
