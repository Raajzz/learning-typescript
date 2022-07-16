let userInput = null;

// const storedDate = userInput || "DEFAULT"; // "" is treated as falsy and false back "DEFAULT" will be placed inside storedDate

// nullish coalescing -> ?? only works for null and undefined

let newStoredData = userInput ?? "DEFAULT";
console.log(newStoredData);
let newUserInput = "";
newStoredData = newUserInput ?? "DEFAULT";
console.log(newStoredData);
