// Generic utility types

// partial basically makes every type in our object-type definition as optional, therefore typescript won't complain if something is not there. But you can't return the object as partial<objectType> because it is of type partial<objectType> | therefore typecast it!

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

const createCourseGoal = (
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal => {
  // let courseGoal:CourseGoal = {} - complains because {} !== CourseGoal type
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.completeUntil = completeUntil;
  return courseGoal as CourseGoal;
};

// readOnly utility type, this is different from const
// with const array you can push stuff
// with readonly array you can't push stuff

const names: /*ReadonlyArray<string> or  Readonly<string[]> or */ Readonly<
  Array<string>
> = ["Max", "Anna"];
names.push("Ryan"); // error
names.pop(); // error

// these generic utility types takes our types and do something with it

// union type when you want to use different types for every function call
// generic types lock in a function call (You have created the object with X stick to X alone) - union types means everytime you call it use something else.
