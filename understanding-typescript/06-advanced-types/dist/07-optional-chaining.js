"use strict";
// optional chaining
var _a;
// nested data where some property may not exist, therefore you're literally trying to find some object on undefined. Especially when you're fetching data from the backend (that which typescript has not control over)
const obj = {
    nestedObj: {
        nestedVal: "nestedVal",
    },
};
console.log((_a = obj === null || obj === void 0 ? void 0 : obj.nestedObj) === null || _a === void 0 ? void 0 : _a.nestedVal); // this is a safe accessing of nested objects and value, basically
