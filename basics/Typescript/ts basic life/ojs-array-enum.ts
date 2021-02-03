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
enum Role{ ADMIN, READ_ONLY, AUTHOR};
const person={
    name: 'urvish',
    age: 21,
    hobbies:['cricket','sketching'],
    role: Role.ADMIN
};
//person.role.push('admin');
//person.role[1]=10;
//person.role=['10','admin'];
let favact: string[];
favact = ['cricket'];
console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}
if(person.role===Role.AUTHOR){
    console.log('is author');
}