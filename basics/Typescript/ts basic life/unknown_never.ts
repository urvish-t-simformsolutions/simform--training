let userinput: unknown;
let userName: string;
userinput=5;
userinput='urvish';
if(typeof userinput ===  'string'){
    userName=userinput;
}
function generateError(message:string,code: number){
    throw {message:message,ErrorCode:code};
}
const result=generateError("Error occurred",500);
console.log(result);