/* 
- Enum -> Human Readable Identifiers.
- In JS, we can just define a bunch of names with numbers and go from there.
- In TS, we can use Enums.
*/

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

enum Defined {
  ADMIN = 100,
  READ_ONLY = "READ_ONLY",
  AUTHOR = 50
}

const enumPerson = {
  name: "Raaj",
  role: Defined.ADMIN
}

if(enumPerson.role === Defined.ADMIN){
  console.log("ADMIN")
}

