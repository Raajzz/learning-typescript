const merge = <T, S>(obj1: T, obj2: S) => {
  return Object.assign(obj1, obj2);
}; // typescript will figure out the return statement will be T & S

const mergedObject = merge(
  /*<{ name: string }, { age: number }>*/ { name: "John" },
  { age: 19 }
); // it actual infers the types automatically, no need to specify {name: string} and {age: number} the code also allows you to call any object rather than making something up before. It's redundant.

/*

Note:
-----
1. If TypeScript can figure something out then it's redundant to specify it by yourself.

*/

console.log(mergedObject);
console.log(mergedObject.age);
