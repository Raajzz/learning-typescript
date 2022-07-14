class Department {
  constructor(private readonly name: string, public readonly id: string) {}

  putName(name: string) {
    this.name = name; // this is an error
  }
}

const accounting = new Department("Accounting", "12345");
accounting.id = "12345"; // error because again, readonly
