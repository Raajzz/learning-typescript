// this was transpiled with ES5 as a target, therefore the workarounds.

"use strict";
var hobbies = ["Metal", "Hard Rock", "Hip Hop", "Programming", "Debates"];
// array destructuring
var hobby1 = hobbies[0],
  hobby2 = hobbies[1],
  remainingHobbies = hobbies.slice(2);
console.log(hobby1, hobby2, remainingHobbies);
// elements are pulled out by order in array destructuring
// object destructuring
var person = {
  firstName: "Raaj",
  age: 19,
};
var firstName = person.firstName,
  age = person.age;
console.log(firstName, age);
// aliases
var userName = person.firstName,
  userAge = person.age;
console.log(userName, userAge);
