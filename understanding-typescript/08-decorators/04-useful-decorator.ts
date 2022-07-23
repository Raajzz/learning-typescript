// building a more useful decorator

// - -> tell typescript that we're aware of the fact that we're getting a parameter but we're just not gonna use it.

function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const node = document.getElementById(hookId);
    if (node) {
      node.innerHTML = template;
    }
  };
}

@WithTemplate("<h1>Person Object</h1>", "header")
class Person {
  name = "Shane";
  constructor() {
    console.log("Object was created");
  }
}

const person = new Person();
