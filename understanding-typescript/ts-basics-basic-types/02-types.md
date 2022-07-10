- In JS (and TS) all numbers are floats by default.
- We don't need to mention the type while we're initializing something because TS has automatic type inference. But it is not a good practice to do this
```js

  let number1: number; // best practice
  let number2: number = 10; // bad practice

  let number;
  number = 12; // this is bad

  let number: number;
  number = 12; // this works and is alright

```
- Core task is to figure out the `type` and to yell at us if we're making some mistake.