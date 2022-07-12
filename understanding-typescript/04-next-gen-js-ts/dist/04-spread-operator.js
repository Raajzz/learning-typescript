"use strict";
// spread operator is literally going to return you a comma separated list of individual elements. NOT an array but a list of individual items.
// arrays
const hobbies = ["Hard Rock", "Metal"];
const newHobbies = ["Programming", ...hobbies];
// or
newHobbies.push(...hobbies);
console.log(newHobbies);
// objects
const person = {
    name: "Max",
    age: 20,
};
const hobbiesObj = {
    newHobbies,
    nestedObj: {
        name: "nestedObjName",
    },
};
const newPerson = Object.assign(Object.assign({}, person), hobbiesObj);
console.log(newPerson);
// Note, ... operator does a deep copy to the first instance of the values but leaves all the nested data as shallow copies.
// the below two operations affected the data of hobbiesObj, therefore they are shallow copies.
newPerson.newHobbies[0] = "HipHop";
newPerson.nestedObj.name = "willThisChange?";
console.log(hobbiesObj);
