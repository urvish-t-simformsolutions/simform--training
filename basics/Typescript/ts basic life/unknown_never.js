"use strict";
var userinput;
var userName;
userinput = 5;
userinput = 'urvish';
if (typeof userinput === 'string') {
    userName = userinput;
}
function generateError(message, code) {
    throw { message: message, ErrorCode: code };
}
var result = generateError("Error occurred", 500);
console.log(result);
