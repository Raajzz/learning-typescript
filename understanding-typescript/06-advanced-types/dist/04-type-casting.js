"use strict";
// TS doesn't able to figure out whether the type of HTML element (HTMLParagraphElement, HTMLDivElement, etc.,) based on getElementById it'll just infer HTMLElement, there we can use typecasting.
const userInputElement = document.getElementById("userInput");
// userInputElement.value = "Hi" // error because, 1. object could be null and 2. value doesn't exist on HTMLElement
// method one
const userInputElementOne = (document.getElementById("userInput")); // can't be used in react though
userInputElementOne.value = "Hi";
// for react
const userInputElementReact = document.getElementById("userInput");
// now, we're enforcing type
userInputElementReact.value = "Hi";
// the above is assuming the dom element is not going to be null, if you don't know use a type check and then assign
const userInputElementCheck = document.getElementById("userInput");
if (userInputElementCheck) {
    userInputElementCheck.value = "No chance!";
}
