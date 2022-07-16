// discriminated union

interface Bird {
  type: "bird"; // not a key value pair
  flyingSpeed: number;
}

interface Horse {
  type: "horse"; // not a key value pair
  runningSpeed: number;
}

type Animal = Bird | Horse;

// how do you check interface?

// this is better than using `in` because I think `in` is O(N) complexity.

const moveAnimal = (animal: Animal) => {
  switch (animal.type) {
    case "bird":
      console.log(animal.flyingSpeed);
      break;
    case "horse":
      console.log(animal.runningSpeed);
  }
};

let param: Animal = {
  flyingSpeed: 100,
  type: "bird",
}; // if you don't provide animal here, then TS will assume that the `type` parameter is a key-value pair. Therefore you have to perform explicit type-declaration inorder to let TS know, the key `type` inside param is not a key value pair.

moveAnimal(param);
