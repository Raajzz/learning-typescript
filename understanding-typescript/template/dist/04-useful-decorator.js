"use strict";
// building a more useful decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// - -> tell typescript that we're aware of the fact that we're getting a parameter but we're just not gonna use it.
function WithTemplate(template, hookId) {
    return function (_) {
        const node = document.getElementById(hookId);
        if (node) {
            node.innerHTML = template;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "Shane";
        console.log("Object was created");
    }
};
Person = __decorate([
    WithTemplate("<h1>Person Object</h1>", "header")
], Person);
const person = new Person();
