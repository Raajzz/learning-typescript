"use strict";
const extractAndConvert = (obj, key) => {
    return "value is " + obj[key];
};
// if you pass ({ name: "raaj"}, "name") then keyof literally checks if "name" is actually a parameter in the type of the object which is literally {name:string}
console.log(extractAndConvert({ name: "Raaj" }, "name"));
