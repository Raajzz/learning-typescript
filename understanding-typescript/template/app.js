var newPerson = {
    name: "Raaj",
    age: 19,
    hobbies: ["Coding", "Hard Rock", "Heavy Metal"],
    // It inferred that it's string[]
    role: [2, "string"]
    // right now role is just (number | string) but to make it a tuple, we have to explicitly need to let TypeScript know.
    // push is allowed with tuples, please don't mess up there.
};
var favoriteActivities;
// favoriteActivities = "hello"; // error
// favoriteActivities = 1; // error
favoriteActivities = ["hello"];
// to use the non-homogeneous nature of array, use any[] although it ruins the actual reason to use static typing
// let anyArray: any[];
for (var _i = 0, _a = newPerson.hobbies; _i < _a.length; _i++) {
    var val = _a[_i];
    console.log(val.toUpperCase());
}
for (var _b = 0, _c = newPerson.role; _b < _c.length; _b++) {
    var val = _c[_b];
    console.log(val);
}
