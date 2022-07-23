"use strict";
// adding multiple decorators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*

Order of decorators -> Now, the factory function runs in a way such that the factor run top down and the decorator function runs bottom up.

Factory is that way because that's how functions run in the first place

*/
const FactorFunctionOne = () => {
    console.log("FactorFunctionOne");
    return (constructor) => {
        console.log("decoratorFunctionOne");
    };
};
const FactorFunctionTwo = () => {
    console.log("FactorFunctionTwo");
    return (constructor) => {
        console.log("decoratorFunctionTwo");
    };
};
let TestClass = class TestClass {
    constructor() {
        this.name = "Shane";
        console.log("Inside the TestClass constructor");
    }
};
TestClass = __decorate([
    FactorFunctionOne(),
    FactorFunctionTwo()
], TestClass);
// decorators are called only when they are i
