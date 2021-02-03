"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printresult(num) {
    console.log("result is:" + num);
}
function addandhandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printresult(add(5, 9));
var combinevalue;
combinevalue = add;
//combinevalue=printresult;
//combinevalues=5;
console.log(combinevalue(17, 15));
addandhandle(10, 20, function (result) {
    console.log(result);
});
