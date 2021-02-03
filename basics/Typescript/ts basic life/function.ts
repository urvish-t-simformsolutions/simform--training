function add(n1: number, n2:number) {
    return n1 + n2;
}

function printresult( num: number): void{
    console.log("result is:" + num);
}

function addandhandle(n1:number, n2:number, cb:(num:number)=>void){
    const  result=n1 + n2;
    cb(result);
}

printresult(add(5,9));

let combinevalue: (a:number, b:number) => number;

combinevalue=add;
//combinevalue=printresult;
//combinevalues=5;

console.log(combinevalue(17,15));

addandhandle(10,20,(result) => {
    console.log(result);
});