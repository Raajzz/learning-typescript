/*

`Function` is a valid type, use when you're assigning a variable with the name of the function.

*/


function lessParams(n1:number){
  return n1;
}
// newAddition = diffParams; // -> Error

function addition(n1: number, n2: number){
  return n1 + n2;
}

function diffParams(n1:string, n2:string){
  return n1 + n2;
}

let newAddition : (n1:number, n2:number) => number;
newAddition = addition;
newAddition = lessParams; // no error is provided here
// newAddition(1); // error is shown here.
