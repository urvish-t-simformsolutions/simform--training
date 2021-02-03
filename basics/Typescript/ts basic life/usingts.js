"use strict";
var button = document.querySelector("button");
var in1 = document.getElementById("num1");
var in2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+in1.value, +in2.value));
});
