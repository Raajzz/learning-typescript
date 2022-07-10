// recommended due to type inference
const person = {
  name: "Raaj",
  age: 19
}

const justObject:object = {
  name: "Raaj",
  age: 19
}

// remember objects, after all are just user defined type made up of core type. Which means, having only a generic :object will doesn't allow TS to infer anything therefore justObject.name will produce an error on TS side, so anything you init with object will automatically becomes the type of that object

const person2: {
  name:string;
  age:number
} = {
  name: "Raaj",
  age: 19
}

// error, person.age = "hello";

console.log(person.name);
console.log(person2.age);