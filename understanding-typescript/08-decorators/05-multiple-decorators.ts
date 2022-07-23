// adding multiple decorators

/*

Order of decorators -> Now, the factory function runs in a way such that the factor run top down and the decorator function runs bottom up.

Factory is that way because that's how functions run in the first place

*/

const FactorFunctionOne = () => {
  console.log("FactorFunctionOne");

  return (constructor: Function) => {
    console.log("decoratorFunctionOne");
  };
};

const FactorFunctionTwo = () => {
  console.log("FactorFunctionTwo");
  return (constructor: Function) => {
    console.log("decoratorFunctionTwo");
  };
};

@FactorFunctionOne()
@FactorFunctionTwo()
class TestClass {
  name = "Shane";
  constructor() {
    console.log("Inside the TestClass constructor");
  }
}

// decorators are called only when they are i