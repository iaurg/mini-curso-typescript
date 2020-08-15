"use strict";
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var button = document.getElementById("button"); /*<-- this ! tell TS that information not be null */
function sum(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    console.log(sum(Number(input1.value), Number(input2.value)));
});
