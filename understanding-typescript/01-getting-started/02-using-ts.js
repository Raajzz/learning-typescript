var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var btn = document.getElementById("btn");
function add(num1, num2) {
    return (num1 + num2);
}
btn.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
/*

Error in input1.value -> It's telling you that, value might not exist for object that we selected, it's not explicit enough.
Error in input1 -> It could've been null (Null pointer exception).

Adding '!' will tell TS that it'll never be null.

*/ 
