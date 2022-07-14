"use strict";
// interfaces as function type
const add = (n1, n2) => {
    return n1 + n2(n1, n1);
};
const addV2 = (n1, n2) => {
    return n1 + n2(n1, n1);
};
console.log(add(3, (p1, p2) => {
    return p1 + p2;
}));
