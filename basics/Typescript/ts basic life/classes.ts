abstract class Department{
    static fiscalyear=2020;
//     private id:string;
//    private fname:string;
   protected employees: string[] = [];
    
    constructor(protected readonly id:string,public fname:string){
        // this.id=id;
        // this.fname=n;
    }
    static createemp(name:string){
        return{ name:name };
    }
    abstract describe(this: Department):void;
    addemp(employee:string){
        this.employees.push(employee);
        // this.id('d2');
    }
    printemp(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITdep extends Department{

    constructor(id:string, public admin: string[]){
    super(id,'IT');
    this.admin=admin;
    }

  

    describe(){
        console.log("eng department - id   " +this.id);
    }
}
class engdep extends Department{
    private lastreport:string;
    private static instance: engdep;

    get mostrecentreport(){
        if(this.lastreport){
            return this.lastreport;
        }
        throw new Error("report not found");
    }

    set mostrecentreport(value:string){
        if(!value){
            throw new Error('please enter valid value');
        }
        this.addreport(value);
    }

    private constructor(id:string, private reports: string[]){
    super(id,'IT');
    this.lastreport=reports[0];
    }
    static getinstance(){
        if(engdep.instance){
            return this.instance;
        }
        this.instance=new engdep('i2',[]);
        return this.instance;
    }
    describe(){
        console.log("eng department - id   " +this.id);
    }
    addemp(uname:string){
        if(uname === 'urvish'){
            return;
        }
        this.employees.push(uname);
    }


    addreport(text:string){
        this.reports.push(text);
        this.lastreport=text;
    }
    getreport(){
        console.log(this.reports);
    }
}

const employee1=Department.createemp('urvish');
console.log(employee1,Department.fiscalyear);

const IT = new ITdep('i1',['urvish']);

IT.addemp('urvish');
IT.addemp('hello');
//engineering.employees[2]='hi';
IT.describe();
IT.fname='new name';
IT.printemp();
console.log(IT);

//const eng= new engdep('i2',[]);
const eng=engdep.getinstance();
eng.mostrecentreport='hi there';
eng.addreport("hello world");
console.log(eng.mostrecentreport);
eng.addemp('urvish');
eng.addemp('hello');
// eng.getreport();
eng.describe();
// eng.printemp();




// const engcopy = { fname:'hello', describe: engineering.describe};
// engcopy.describe()
