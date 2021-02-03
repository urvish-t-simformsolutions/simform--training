"use strict";
// const person:{
//     name: string;
//     age:number;
//     hobbies: string[];
//     role: [number,string];
// }={
//     name: 'urvish',
//     age: 21,
//     hobbies:['cricket','sketching'],
//     role:[2,'author']
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'urvish',
    age: 21,
    hobbies: ['cricket', 'sketching'],
    role: Role.ADMIN
};
//person.role.push('admin');
//person.role[1]=10;
//person.role=['10','admin'];
var favact;
favact = ['cricket'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
