// let and const

// variables and constants

const userName = "Max";

/*

- With `var` JavaScript only knows global and function scope.
  - "var" defined inside an if block are global by nature.
- With `let` JavaScript only cares about global and "Block" scope. Which means,
  - "let" defined inside an if block are local to that "Block" by nature.

*/

if(true){
  var varVariable = 1;
  let letVariable = 2;
}

console.log(varVariable); // not an error
// console.log(letVariable); // error