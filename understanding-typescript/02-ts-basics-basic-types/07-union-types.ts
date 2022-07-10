/*

Union type.
-----------

- If you wanna work with multiple types together use union type.
- TypeScript doesn't know whether the '+' of two different union parameters are worth it, therefore it throws an error.

*/

function combine(input1: number | string, input2: number | string){
  if(typeof input1 === "number" && typeof input2 === "number"){
    return input1 + input2;
  }
  return input1.toString() + input2.toString();
  // input1.toLowerCase()
  // You can't use toLowerCase because TS doesn't know what's being passed in unless you do something that literally makes it to that type.
}

console.log(combine(1,1));
