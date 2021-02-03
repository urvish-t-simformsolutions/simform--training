// const add = (a:number, b:number=8) => a+b;

// const printoutput:(a:number|string) => void= output => console.log(output);

// const button = document.querySelector('button');

// if(button){
//     button.addEventListener('click', event => console.log(event));
// }
// printoutput(add(7));

const hobbies=['cricket','cooking'];
const active=['skating'];
active.push(...hobbies);
console.log(active);
const person ={
    fname: 'urvish',
    age:21
}

const copiedp = {...person};

console.log(copiedp);

const Add = (...number :number[]) =>{
    return number.reduce((result,value) => {
        return result+value;
    },0);
};

console.log(Add(5,10,6,8));

const [hobby1,hobby2,...remaininghobbies] = hobbies;
console.log(hobbies,hobby1,hobby2);

const { fname:fullname, age}=person;
console.log(fullname,age);