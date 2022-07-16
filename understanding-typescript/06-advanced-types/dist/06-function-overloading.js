"use strict";
function add(n1, n2) {
    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
const res3 = add(1, " Halpert");
// the return type is always return a combinable. Therefore the result can't be used directly with string functions, therefore do function overloads
const res = add("Jim", "Halpert");
const res2 = add(1, 2);
