/* 

Look, intersection means, does the resulting type belong to "both" the type or not.

When considering for an object don't consider it has a collection of types, look it like a brand new object itself, the resulting type must have the types of both the object.

When you consider two primitive types, you just can't make something to point to two primitive types at the same time. However you can make an object point to two different objects as the same time because object has a user defined type.

*/

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// this below is the combination of the above two
type ElevatedEmployee = Admin & Employee;

/* Note, we need to provide the type of the object, TS can't figure out that inferred type could have the same type as the above type definitions */

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

// intersecting regular types

type Numeric = number & boolean; // the resulting type is never because something can never point to both number and boolean

let num: Numeric = 5;
num = true;
