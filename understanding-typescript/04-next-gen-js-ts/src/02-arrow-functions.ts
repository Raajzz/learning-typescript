const add = (n1:number, n2:number) => {
  return n1 + n2;
}

const sub = (n1:number, n2:number) => n1 - n2;

const squareNumber = (num: number) => num * num; 

// or

const betterSquareNumber: (num: number) => number = num => num * num;

console.log(add(5,10));
console.log(sub(10,5));
console.log(squareNumber(5));
console.log(betterSquareNumber(5));