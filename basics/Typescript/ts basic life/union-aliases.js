"use strict";
function combine(n1, n2, rs) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number' || rs === 'asnumber') {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
    // if(rs  === 'asnumber'){
    //     return parseFloat(result);
    // }else{
    //     return result.toString();
    // }
}
var addages = combine(30, 36, 'asnumber');
console.log(addages);
var Stringnumber = combine('30', '36', 'asnumber');
console.log(Stringnumber);
var addname = combine("Urvish", "Tanti", 'as-string');
console.log(addname);
