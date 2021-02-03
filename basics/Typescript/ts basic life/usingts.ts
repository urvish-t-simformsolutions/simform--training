const button = document.querySelector("button");
const in1 = document.getElementById("num1")! as HTMLInputElement;
const in2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1:number,num2:number) {
    return num1 + num2;
} 

button.addEventListener("click",function(){
    console.log(add(+in1.value,+in2.value));
});