/*

- Function return typed would usually be inferred from the return value. It's preferred to let TypeScript infer it unless there is a specific reason for a function to return something specif. (Say always returning object of a particular type)
- Void makes a comeback! It's the type for function that doesn't return anything.
- You should not explicitly write : undefined, if you're not having a return value. undefined is actually a type in TypeScript is only allowed if you actually have return;

*/ 

function returnUndefined() : undefined {
  return;
}

console.log(returnUndefined())

function printSum(input1:number, input2:number){
  console.log(input1 + input2);
}

// hovering over printSum you'll actually see a void function.

printSum(1,2);