"use strict";
// okay, decorator functions are automatically executed by providing a constructor parameter, therefore you can use a function that returns another function and call that function as the decorator and the inside function gets the constructor
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// the outer function is a factory function, that which returns a decorator function
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
// @Logger() won't work because the returned function is not accepting an argument
// @Logger()() won't work because decorator still needs to pass constructor argument
/*
@Logger()() -> works for the below function

function Logger(){
  return function(){
    return function(constructor: Function){
      console.log("Double nested function");
    }
  }
}

*/
let Person = class Person {
    constructor() {
        this.name = "Shane";
        console.log("Object is created...");
    }
};
Person = __decorate([
    Logger("LOGGING - PERSON")
], Person);
const person = new Person();
console.log(person.name);
