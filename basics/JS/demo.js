// const results=[10,12,10.3,11.2,-3,41];
// results2=results.slice();
// results.push(9.99);
// console.log(results2,results);

const prices=[11.99,30.99,10,23.99];
const tax = 0.19;

const finalprice=prices.map((price,idx,prices)=>{
const priceobj={index:idx, finalprice:price * (1+tax)};
return priceobj;
});

//console.log(prices,finalprice);
const sortedprice =prices.sort((a,b)=>{
    if(a>b){
        return 1;
    } else if(a === b){
        return 0;
    } else{
        return -1;
    }
});
console.log(sortedprice);

const filteredarray = prices.filter(p =>  p > 15);
console.log(filteredarray);

const sum = prices.reduce((prevalue,curvalue) => prevalue+curvalue,0);

console.log(sum);

const data ='ahmedabad;19;1999';
const transformdata=data.split(';');
console.log(transformdata);

const joinname = ['urvish', 'tanti'];
const name1 = joinname.join(' ');
console.log(name1);

const copiedname=[...joinname];
joinname.push("mr");
console.log(copiedname,joinname);

console.log(Math.min(...prices));

const persons = [{name:'urvish',age:21},{name:'meet',age:20}];
const copiedpersons=[...persons.map(person => ({name:person.name,age:person.age}))];

persons.push=({name:'anna',age:25});
persons[0].age=31;

console.log(persons,copiedpersons);
