function Logger(logString:string){
    return function(constructor: Function){
    console.log(logString);
    console.log(constructor);
    };
}

function withTemplate(template:string,hookID:string){
    console.log('template factory');
    return function<t extends {new(...args:any[]): {name:string}}>(originalconstructor: t){ 
        return class extends originalconstructor{
           // [x: string]: string | null;
            constructor(..._:any[]) {
                super();
                const hookEl=document.getElementById(hookID);
                //const p=new originalconstructor();
                if(hookEl){
                    hookEl.innerHTML=template;
                    hookEl.querySelector('h1')!.textContent=this.name; 
                }
            }
        }
    };

}
@Logger('Hello World')
@withTemplate('<h1> person object</h1>','app')

class Person {
    name='urvish';

    constructor(){
        console.log("person object");        
    }
}

// const pers= new Person();

// console.log(pers);
//-------------------
function log(target:any, property:string|symbol){
    console.log('property decorator');
    console.log(target,property);
}

function log2(target:any,name:string,descriptor:PropertyDescriptor){
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);  
}

function log3(target:any,name:string|symbol,descriptor:PropertyDescriptor){
    console.log('method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);  
}

function log4(target:any,name:string|symbol,postion:number){
    console.log('parameter decorator');
    console.log(target);
    console.log(name);
    console.log(postion); 
}

class product{
    @log
    title:string;
    private _price:number;
    
    
    constructor(t:string,p:number){
        this.title=t;
        this._price=p;
    }
    @log2
    set price(val:number){
        if(val>0){
            this._price=val;
        }else{
            throw new Error("invalid");        }
    }
    @log3
    getPriceWithTax(@log4 tax:number){
        return this._price * (1+tax);
    }
}

function  autobind(_:any,_2: string,descriptor:PropertyDescriptor){
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor ={
        configurable:true,
        enumerable: false,
        get() {
            const boundfn= originalMethod.bind(this);
            return boundfn;
        }
    };
    return adjDescriptor;
}

class printer{
    message='this works';
    @autobind
    showMessage(){
        console.log(this.message);
    }
}
const p=new printer();
p.showMessage();
const button=document.querySelector('button')!;
button.addEventListener('click',p.showMessage);


