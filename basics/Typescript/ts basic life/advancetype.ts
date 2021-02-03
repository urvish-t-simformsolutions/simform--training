type Admin ={
    name:string;
    privileges:string[];
}

type employee={
    name:string;
    startdate: Date;
}

type elemp = Admin & employee;
const u1: elemp={
    name:'urvish',
    privileges:['drawing'],
    startdate: new Date()
}

type Combine= string | number;
type Numeric = number | boolean;
type universal= Combine & Numeric;
// form object type it is union and for union type is intersection

function add(a:Combine,b:Combine){
    if(typeof a ==='string'|| typeof b ==='string'){
        return a.toString()+b.toString();
    }
    return a+b;
}

type Unknown= employee | Admin;
function print(emp:Unknown){
    console.log(emp.name);
    if('privileges' in emp){
        console.log(emp.privileges);
    }
    if('startdate' in emp){
        console.log(emp.startdate);
    }
}
print(u1);

const userinput=document.getElementById("userInput");
if(userinput){
    (userinput as HTMLInputElement).value="hi there";
}