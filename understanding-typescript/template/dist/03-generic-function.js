"use strict";
const merge = (obj1, obj2) => {
    return Object.assign(obj1, obj2);
}; // typescript will figure out the return statement will be T & S
const mergedObject = merge(
/*<{ name: string }, { age: number }>*/ { name: "John" }, { age: 19 }); // it actual infers the types automatically, no need to specify {name: string} and {age: number}
console.log(mergedObject);
console.log(mergedObject.age);
