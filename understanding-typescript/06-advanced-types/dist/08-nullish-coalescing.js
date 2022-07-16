"use strict";
let userInput = null;
userInput = undefined;
userInput = "";
// const storedDate = userInput || "DEFAULT"; // "" is treated as falsy and false back "DEFAULT" will be placed inside storedDate
// nullish coalescing -> ?? only works for null and undefined
const newStoredData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(newStoredData);
