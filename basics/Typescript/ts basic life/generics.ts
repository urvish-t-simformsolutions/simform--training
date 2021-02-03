// const names: Array<string>=[];
// const promise: Promise<any> = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(10);
//     }, 2000);
// });

// promise.then(data=>{
//     data.split(' ');
// });

function merge<T extends object,U extends object>(objA:T, objB:U){
    return Object.assign(objA,objB);
}
const mergeObj=merge({name:'urvish',hobbies:['cricket']},{age:21});
console.log(mergeObj);

class storage<t>{
    private data: t[] =[];
    
    addItem(item:t){
        this.data.push(item);
    }

    removeItem(item:t){
        this.data.splice(this.data.indexOf(item),1);
    }
    getItems() {
        return [...this.data];
    }
}

const textStorage=new storage<string>();
textStorage.addItem('Urvish');  
textStorage.addItem('Tanti');  
textStorage.removeItem('Urvish');
console.log(textStorage.getItems());
