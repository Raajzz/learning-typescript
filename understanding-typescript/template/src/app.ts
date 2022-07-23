// property decorators

// depending upon where you add the decorator function it'll get parameters

function Logger(target: any, propertyName: string | Symbol) {
  console.log("Inside the property logger");

  console.log(target);
  console.log(propertyName);
} // this is executed when the class gets registered by JavaScript

function ClassLogger(_: Function) {
  console.log("Inside the class logger");
}

@ClassLogger
class Product {
  @Logger // adding like this, sets the target to the prototype of the object that was created | target -> constructor function
  // second name is the propertyName
  title: string;
  @Logger
  price: number;

  public set setPrice(price: number) {
    this.price = price;
  }

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }

  getPriceWithTax(tax: number) {}
}

// Logger executes before ClassLogger
