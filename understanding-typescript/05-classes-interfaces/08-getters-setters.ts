// getters - setters

// getters and setters aren't simply just functions, they have made to look like a field rather

class Department {
  constructor(private name: string) {}

  get getName() {
    if (this.name === "") {
      throw new Error("name property is empty");
    }
    return this.name;
  }

  set setName(name: string) {
    if (!name) {
      throw new Error("Nothing was provided in the parameter");
    }
    this.name = name;
  }
}

const dept = new Department("");

// setter
dept.setName = "Slim Shady";
// getter
console.log(dept.getName);
