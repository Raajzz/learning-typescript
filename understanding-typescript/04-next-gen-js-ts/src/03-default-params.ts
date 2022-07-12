// default parameters

const multiply = (n1: number, n2: number = 6) => n1 * n2;

// const multiply = (n1: number = 5, n2: number) => n1 * n2;
// error as JS won't be able to figure out whether we're trying to replace n1 or put the value into n2


console.log(multiply(5, 10));