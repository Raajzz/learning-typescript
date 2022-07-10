/*

"never" means it'll be never returns anything. Like NEVER returns anything.
"void" means it won't return anything, but it can return something.

*/
function voidFn(callback) {
    // callback with return statement and type void
    console.log(callback());
}
voidFn(function () {
    return "hello there";
});
function callbackIdk() {
    return "Hello There";
}
voidFn(callbackIdk);
function fn(x) {
    console.log(x());
}
fn(function () {
    return "Hello there";
}); // this is fine
// // but this isn't.
// function hello(): void {
//   return "will produce an error";
// }
