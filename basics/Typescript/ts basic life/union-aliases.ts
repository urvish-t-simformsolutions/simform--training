type combineable =number | string;
type convdes ='asnumber' | 'as-string';
function combine(n1:combineable,
    n2:combineable,
     rs: convdes)
{
    let result;
    if(typeof n1 === 'number' && typeof n2 === 'number' || rs==='asnumber'){
        result=+n1 + +n2;
    } else {
        result = n1.toString() + n2.toString();
    }
    return result;
    // if(rs  === 'asnumber'){
    //     return parseFloat(result);
    // }else{
    //     return result.toString();
    // }
   
}

const addages = combine(30,36,'asnumber');
console.log(addages);
const Stringnumber = combine('30','36','asnumber');
console.log(Stringnumber);
const addname = combine("Urvish","Tanti",'as-string');
console.log(addname);