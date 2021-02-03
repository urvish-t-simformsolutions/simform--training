
let abc= 'abc';
const button = document.querySelector('button')!;

function add(n1:number,n2:number) {
    if (n1 + n2 > 0){
        return n1+n2;
    }
    return;
}

function clickHandler(message:string) {
   // let username= "urvish";
    console.log('click' + message);
}
if  (button) {
    button.addEventListener('click',clickHandler.bind(null,"hello"));
}
// if(button)  {
//     button.addEventListener('click',() => {
//         console.log("clicked");
// });
// }

// let age:number;
// age=35;
// const username = "urvish";
// //username = 3;

// console.log(username);
