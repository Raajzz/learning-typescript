"use strict";
// extend with | means, either extend something that satisfies all the properties of string or number or boolean
// extend with & means, extend a primitive type that satisfied all the properties of string or number boolean, therefore there could be no type, hence the type never.
// `never` means values will never occur (which makes sense as there could be no primitive type that can satisfy all primitive types)
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        const pos = this.data.indexOf(item);
        if (pos === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("John");
textStorage.addItem("Jane");
textStorage.addItem("Slim");
textStorage.addItem("Shady");
textStorage.removeItem("Jane");
console.log(textStorage.getItems());
// we can also add numbers or string | numbers
// it gives us the ability to be flexible at the same time make our code strongly typed
// primitive type !== object type, there's a lot more to it (like passing references/copies, not doing deep searching and doing a simple reference searching and stuff like that)
/*

const objectStorage = new DataStorage<object>();
objectStorage.addItem({ name: "max" });
objectStorage.addItem({ name: "manu" });
objectStorage.removeItem({ name: "max" }); // here we're creating a new object whose reference is something else that the addItem's {name: "max"} therefore reference checking will lead to bugs, therefore we only accept primitive types. This is the type-safety that typescript provides. Doesn't delete anything so the whole array of objects will be returned
console.log(objectStorage.getItems());

*/
// generic programming -> flexibility and type-safety
