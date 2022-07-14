"use strict";
// the below code teaches, extending
class InterfaceClassOne {
    constructor(subInterfaceField, mulInterfacefield) {
        this.subInterfaceField = subInterfaceField;
        this.mulInterfacefield = mulInterfacefield;
    }
    add(n1, n2) {
        return n1 + n2;
    }
}
const obj = new InterfaceClassOne("one");
