"use strict";
function add(n1, n2, showresult, phrase) {
    var result = n1 + n2;
    if (showresult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 3.1;
var printresult = true;
var resultphase = 'result  is';
//const result=
add(number1, number2, printresult, resultphase);
//console.log(result);
