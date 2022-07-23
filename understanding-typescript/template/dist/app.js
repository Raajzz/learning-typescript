"use strict";
// property decorators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// depending upon where you add the decorator function it'll get parameters
function Logger(target, propertyName) {
    console.log("Inside the property logger");
    console.log(target);
    console.log(propertyName);
} // this is executed when the class gets registered by JavaScript
function ClassLogger(_) {
    console.log("Inside the class logger");
}
let Product = class Product {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
    set setPrice(price) {
        this.price = price;
    }
    getPriceWithTax(tax) { }
};
__decorate([
    Logger // adding like this, sets the target to the prototype of the object that was created | target -> constructor function
], Product.prototype, "title", void 0);
__decorate([
    Logger
], Product.prototype, "price", void 0);
Product = __decorate([
    ClassLogger
], Product);
// Logger executes before ClassLogger
