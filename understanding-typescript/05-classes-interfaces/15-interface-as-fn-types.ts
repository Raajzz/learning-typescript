// interfaces as function type

interface FunctionInterface {
  (n1: number, n2: number): number;
}

type functionType = (n1: number, n2: number) => number;

const add = (n1: number, n2: FunctionInterface): number => {
  return n1 + n2(n1, n1);
};

const addV2 = (n1: number, n2: functionType): number => {
  return n1 + n2(n1, n1);
};

console.log(
  add(3, (p1: number, p2: number): number => {
    return p1 + p2;
  })
);
