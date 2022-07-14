// the below code teaches, extending

// optional type ->
// variables => variableName?
// functions => optional! => method(){...}

interface SubInterface {
  subInterfaceField: string;
  sub?(n1: number, n2: number): number; // this means that implementing the sub function is optional
}

interface AddInterface {
  addInterfaceField?: string;
  add(n1: number, n2: number): number;
}

interface MulInterface extends SubInterface, AddInterface {
  mulInterfaceField?: string;
  mul?(n1: number, n2: number): number;
}

class InterfaceClassOne implements MulInterface {
  constructor(
    public subInterfaceField: string,
    public mulInterfacefield?: string
  ) {}

  add(n1: number, n2: number): number {
    return n1 + n2;
  }
}

const obj = new InterfaceClassOne("one");
