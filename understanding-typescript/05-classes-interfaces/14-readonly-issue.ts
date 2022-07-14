/* 

Can add readonly to interface fields, cannot add access modifiers (obviously), now, this readonly will allow you to do add only once. 

Now, this only works if the entire object is of the same type as interface. Readonly needs to be carried forward into the implementing class, which sucks to be honest (and guess what there's actually an issue opened on GitHub that deals with the ridiculous natures of the same!).

*/

interface Greetable {
  readonly name: string;
  greet(phrase: string): void;
}

class GreetableClass implements Greetable {
  readonly name: string; // without adding readonly, it wouldn't be readonly, as `readonly` is not carried from the interface
  constructor(name: string) {
    this.name = name;
  }
  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
    this.name = "hello";
  }
  newGreet(phrase: string) {
    this.name = "NotHello";
  }
}

const obj: Greetable = new GreetableClass("Raaj");
console.log(obj.name);
