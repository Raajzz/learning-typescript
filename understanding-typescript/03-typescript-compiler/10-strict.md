- `Strict: true` is for type-checking, it makes everything true, wanna add
- `noImplicitAny` - It ensures that we have to be clear about our parameter types. Like giving a type to a parameter. 
  - It's fine for variables because TS track the datatype of variables, but for parameters it has to be defined (inorder to let typescript know how should it be treated, for instance, params with `string` type has .toUppercase(), but a `number` doesn't, to provide this error TS has to know what is going to be passed, for variables it'll come into picture after we initialize something, which again we'll do it anyway)
- `strictNullChecks` - Be strict with values might potentially be a null. If you know something does exist use "!" but you're not sure use if (mightBeNullObject) { ... }
- `strictBindCallApply` is used to produce errors when you use them incorrectly.
- "use strict" will just allow you to write better code. It'll produce errors when you declare a variable without a type and it has kinda block scope (if you declare it in the first line, global scope) if you declare it inside a function block it'll have that local scope.
- `noUnusedParameters` - will put out an error if there's an unused parameter
- `noUnusedLocal` - error if you're not using a locally defined variable (won't care about global variables).
- `noReturn` - Basically means, there MUST be a explicit return statement in all possible branches of your code.
  ```ts
  function demo(n1: number, n2: number){
    if(n1 + n2 > 0){
      return n1 + n2;
    }
  }
  // will cause an error if made true.
  ```