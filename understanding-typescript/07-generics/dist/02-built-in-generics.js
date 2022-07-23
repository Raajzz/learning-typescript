"use strict";
const names = ["John", "Jane"];
// Can be thought as two types being combined.
// Generic is similar to cpp generic programming
// Array itself is a type, it doesn't care what but in needs something
const anyArrayOne = [1, "Hello", "World"];
const arrayTwo = [1, "Hello", true];
const stringArray = [];
// now, we can get better auto-completion
// using generic with promises
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done!");
    }, 2000);
});
promise.then((res) => {
    res.split(" "); // now, using Promise<string> will help us in auto-completion and will also warn us when we're doing something error prone. (Calling a split in a resolve that returns a number)
});
