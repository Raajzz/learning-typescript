// rest parameters -> accepting multiple parameters

const addMultiple = (...numbers: number[]): number => {
  let total = 0;
  numbers.forEach((element) => {
    total += element;
  });
  return total;
};

const addMultipleTuple = (...numbers: [number, number, number]): number => {
  let total = 0;
  numbers.forEach((element) => {
    total += element;
  });
  return total;
};

console.log(addMultiple(5, 10, 2, 3.7));
console.log(addMultipleTuple(5, 10, 3.7)); // takes away the need for rest params, it's your wish
