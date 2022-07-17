"use strict";
// type constraints -> This'll allow us to tell TS what should the generic type must be.
// extends mean, it acquires everything that the parent class has to offer and it can have some more. Therefore, the derived child class T must have atleast one property that should have `length:number`
const merge = (obj1, obj2) => {
    return Object.assign(obj1, obj2);
};
const mergedObject = merge({ name: "John" }, 19 // produces an error as we constrained our U type to object, will work if we extend to object | number
);
