// If you have the chance of knowing what's gonna be the type, stick with that type. Unless go with `any`, any basically means typescript won't give a damn about what type of data should be stored, not a good practice as it basically makes typescript useless.

const anyPerson:{
  name: string;
  myArray: any;
} = {
  name : "Raaj",
  myArray: ["A string", 1, ["hello"]] 
}

anyPerson.myArray[0] = {
  obj:"obj_value"
};

for (const val of anyPerson.myArray){
  console.log(val);
}