// okay, decorator functions are automatically executed by providing a constructor parameter, therefore you can use a function that returns another function and call that function as the decorator and the inside function gets the constructor

// the outer function is a factory function, that which returns a decorator function
function Logger(logString: string) {
  return function (constructor: Function) {
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
@Logger("LOGGING - PERSON")
class Person {
  name = "Shane";
  constructor() {
    console.log("Object is created...");
  }
}

const person = new Person();
console.log(person.name);
