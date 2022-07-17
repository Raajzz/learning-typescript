// another generic function

// extends mean, it acquires everything that the parent class has to offer and it can have some more. Therefore, the derived child class T must have atleast one property that should have `length:number`
interface Lengthy {
  length: number;
}
// doing this way will allow you to even have objects that have a length property
const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
  let descriptionString = "Got no element";
  if (element.length === 1) {
    descriptionString = "Got 1 element";
  } else if (element.length > 1) {
    descriptionString = "Got " + element.length + " elements";
  }
  return [element, descriptionString];
};

console.log(countAndDescribe([100]));
console.log(countAndDescribe({ length: 100 })); // works and prints the object and `Got 100 elements`
