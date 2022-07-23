"use strict";
// another generic function
// doing this way will allow you to even have objects that have a length property
const countAndDescribe = (element) => {
    let descriptionString = "Got no element";
    if (element.length === 1) {
        descriptionString = "Got 1 element";
    }
    else if (element.length > 1) {
        descriptionString = "Got " + element.length + " elements";
    }
    return [element, descriptionString];
};
console.log(countAndDescribe([100]));
console.log(countAndDescribe({ length: 100 })); // works and prints the object and `Got 100 elements`
