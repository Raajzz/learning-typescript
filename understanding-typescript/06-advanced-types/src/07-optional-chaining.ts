// optional chaining

// nested data where some property may not exist, therefore you're literally trying to find some object on undefined. Especially when you're fetching data from the backend (that which typescript has not control over)

const obj = {
  nestedObj: {
    nestedVal: "nestedVal",
  },
};

console.log(obj?.nestedObj?.nestedVal); // this is a safe accessing of nested objects and value, basically
