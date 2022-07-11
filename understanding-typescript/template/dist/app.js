"use strict";
console.log("Enter Night! Exit Light!!");
let myString = "Haha";
const button = document.getElementById("hello");
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log("Enter night!");
});
// buggy code, because I'm neither doing ! when I'm assigning, nor null checking when I'm calling a method on it.
// now, the above line is an error because TS doesn't know the existence of DOM APIs if we set the libs as empty, however to let it know to include DOM APIs include them in the lib array.
