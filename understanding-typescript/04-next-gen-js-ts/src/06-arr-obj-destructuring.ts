const hobbies = ["Metal", "Hard Rock", "Hip Hop", "Programming", "Debates"];

// array destructuring

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobby1, hobby2, remainingHobbies);

// elements are pulled out by order in array destructuring

// object destructuring

const person = {
  firstName: "Raaj",
  age: 19,
};

const { firstName, age } = person;
console.log(firstName, age);

// aliases

const { firstName: userName, age: userAge } = person;
console.log(userName, userAge);
