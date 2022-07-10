/*

"never" means it'll be never returns anything. Like NEVER returns anything. The whole thing cannot have a reachable point.
"void" means it won't return anything and the function would terminate.

*/

function voidFn(callback:()=>void) : void{
  
  // callback with return statement and type void
  console.log(callback());
}

voidFn(function(){
  return "hello there";
})

function callbackIdk() {
  return "Hello There"
}

voidFn(callbackIdk);

function fn(x: () => never) {
  console.log(x()); 
  // this partiality towards anon functions because, how could typescript do anything then? Say you have an anon function with a return-value, typeScript will notify you if you do callBack().doSomething(), it'll yell that doing anything with a void return function is a lost cause, but you can't control this behavior
  /*
  
  let something = x(); // how will it produce any error, the real question is why not?
  
  */ 
}

// NEVER

// okay, this changes things, if using never, I'm getting an error if I use return "Hello there"

fn(() => {
  return "Hello there";
}); // produce an error

// use never in error utility functions, CusomError Handlers. Because it never returns anything, like just script will be crashed therefore never produces anything, everything will end before return is reached. Which is different from as void returns nothing.

// function that never returns anything, it's said better here, A function returning 'never' cannot have a reachable end point.

function generateError() : never{
  throw { message: "error"};
}

// or

function infLoop(): never {
  while(true){
    ;
  }
}