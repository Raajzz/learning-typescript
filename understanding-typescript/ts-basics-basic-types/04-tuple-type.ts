const tuplePerson:{
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  // at the end of each line, you can put `,` or `;` or nothing at all
} = {
  name: "Raaj",
  age: 19,
  hobbies: ["Coding", "Hard Rock", "Heavy Metal"],
  // It inferred that it's string[]
  role: [2, "string"]
  // right now role is just (number | string) but to make it a tuple, we have to explicitly need to let TypeScript know.
  // push is allowed with tuples, please don't mess up there.
}

let tupleFavoriteActivities: string[];
// tupleFavoriteActivities = "hello"; // error
// tupleFavoriteActivities = 1; // error
tupleFavoriteActivities = ["hello"]

// to use the non-homogeneous nature of array, use any[] although it ruins the actual reason to use static typing
// let anyArray: any[];

for (const val of tuplePerson.hobbies){
  console.log(val.toUpperCase());
}

for (const val of tuplePerson.role){
  console.log(val);
}