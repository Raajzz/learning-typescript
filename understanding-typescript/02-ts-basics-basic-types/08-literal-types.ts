/* 

literal types
-------------

- If you know the exact value just do this

```
function (parameter : "as-number" | "as-text"), now this is actually possible because (I THINK) everything in JS is an object
```

*/

function strParamFn(stringParameter : "one" | "two"){
  if(stringParameter === "one"){
    return "One";
  } else {
    return "Two";
  }
}

// produces an error because "on" just doesn't exist in the types we provided
// console.log(strParamFn("on")); 

enum StringNumbers {
  ONE,
  TWO
}

function enumParamsFn(stringParameter : StringNumbers.ONE | StringNumbers.TWO){
  if(stringParameter === StringNumbers.ONE){
    return "One"
  } else if (stringParameter === StringNumbers.TWO){
    return "Two"
  }
}

console.log(strParamFn("one")); // works
console.log(enumParamsFn(StringNumbers.TWO)); // works