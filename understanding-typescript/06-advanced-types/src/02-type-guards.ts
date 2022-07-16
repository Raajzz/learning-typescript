/*

A type-guard is basically using an if..else statement to do a type-check before we do something with the data. And for the coercion error, well it's a best practice to convert two things to their equivalent string before doing any concat, therefore doing a type check for two params of union type "string | number" is advised. With primitive types we can use typeof

*/

type Combinable = number | string;

function add(n1: Combinable, n2: Combinable) {
  // return n1 + n2; // error
  if (typeof n1 === "string" || typeof n2 === "string") {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type UnknownEmployee = Admin | Employee;

const printInfo = (obj: UnknownEmployee) => {
  console.log(obj.name);
  // the following are error prone because TS cannot say surely that that particular object will be off type Employee or Admin
  // console.log(obj.privileges); // error
  // console.log(obj.startDate); // error

  // can't use a if typeof obj === "object", because still we can't check if type is Admin or Employee

  // rather for type check the actual keys like below

  if ("privileges" in obj) {
    console.log(obj.privileges);
  }
  if ("startDate" in obj) {
    console.log(obj.startDate);
  }
};

printInfo({
  name: "Raaj",
  // privileges: ["Admin"],
  startDate: new Date(Date.now()),
});

// if you have classes for objects better use instance of

class One {
  common() {
    console.log("This is a common function");
  }
  oneFn() {
    console.log("This is a one function");
  }
}

class Two {
  common() {
    console.log("Common function in Two");
  }
  twoFn() {
    console.log("This is two function");
  }
}

const printInfoNew = (obj: One | Two) => {
  obj.common();
  // the following are error prone because TS cannot say surely that that particular object will be off type Employee or Admin
  // console.log(obj.privileges); // error
  // console.log(obj.startDate); // error

  // can't use a if typeof obj === "object", because still we can't check if type is Admin or Employee

  // rather for type check the actual keys like below

  if (obj instanceof One) {
    obj.oneFn();
  }
  if (obj instanceof Two) {
    obj.twoFn();
  }
};

printInfoNew(new Two());
