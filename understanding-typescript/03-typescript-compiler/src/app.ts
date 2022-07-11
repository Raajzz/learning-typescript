console.log("Enter Night! Exit Light!!");
let myString = "Haha";

let hello = "hello";

const button = document.getElementById("hello");

function add (n1:number, n2:number){
  if(n1 + n2 > 0){
    return n1 + n2;
  }
  return;
}

button?.addEventListener("click", () => {
  console.log("Enter night!");
  console.log(add(1,2));
});
// buggy code, because I'm neither doing ! when I'm assigning, nor null checking when I'm calling a method on it.
// now, the above line is an error because TS doesn't know the existence of DOM APIs if we set the libs as empty, however to let it know to include DOM APIs include them in the lib array.
