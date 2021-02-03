//type addfn =(a:number,b:number)=>number;
  
interface addfn{
    (a:number,b:number):number;
}

let add:addfn;
    add=(a:number,b:number)=>{
        return a+b;
    }




interface named{
 readonly name?:string;
 outputname?:string;
}

interface greetable extends named{ 
    //age: number;
    greet(phrase:string):void;
}
 
class person implements greetable{
    name?:string;
    age =21;

    constructor(n?:string){
        if(n){
            this.name=n;
        }
        
    }
    greet(phrase:string){
        if(this.name){
            console.log(phrase+ " "+this.name);
        }else{
            console.log('Hi!');
        } 
    }
}

let user1: greetable;

// user1={
//     name: 'urvish',
//     age: 21,
//     greet(phrase:string){
//         console.log(phrase+ " "+this.name);
//     }
//  };

user1=new person();

 user1.greet('hello:  ');