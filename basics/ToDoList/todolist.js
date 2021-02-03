const clear = document.querySelector(".clear");
const Tdate = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const check ="fa-check-circle";
const uncheck=" fa-circle-thin";
const linethrough="lineThrough";
const option={weekday:"long", month:"short", day: "numeric"};
const today= new Date();
Tdate.innerHTML= today.toLocaleDateString("en-US",option);
let id;
let LIST;
let data = localStorage.getItem("todo");
if(data){
    LIST = JSON.parse(data);
    id=LIST.length;
    loadList(LIST);
}else{
    LIST = [];
    id = 0;
}
function loadList(array){
    array.forEach(function(item) {
       addtodo(item.name, item.id , item.done, item.trash) 
    });
}
function clearall(){
    localStorage.clear();
    location.reload();
}
function addtodo(todo,id,done,trash)
{
    if(trash){return;}
    const DONE = done ? check: uncheck;
    const LINE = done ? linethrough: "";
    const text =`<li class="item">
    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
    <p class="text ${LINE}">${todo}</p>
    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
    </li>
    `;
    const position = "beforeend";
    list.insertAdjacentHTML(position,text);
}
function submit(){
        const todo=input.value;
        if(todo)
        {
            addtodo(todo,id,false,false);
             LIST.push(
                {
                    name: todo,
                    id: id,
                     done: false,
                    trash: false
                 }            
           );
           id++;
           localStorage.setItem("todo",JSON.stringify(LIST));           
        }
        input.value="";       
    }
function completetodo(element){
    element.classList.toggle(check);
    location.reload();
    //element.classList.toggle(uncheck);
    element.parentNode.querySelector(".text").classList.toggle(linethrough);
    LIST[element.id].done = LIST[element.id].done ? false : true;
}
function removetodo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
    //console.log(localStorage);
    //localStorage.removeItem('LIST[element.id]');
    //console.log(localStorage);
    LIST.splice(element.id,1);
}
document.addEventListener("click",function(event){
    let element=event.target;
    var Ejob=event.target.attributes.job.value;
    if(Ejob == "complete"){
        completetodo(element);
    }else if (Ejob == "delete"){
        removetodo(element);
    }   
    localStorage.setItem("todo",JSON.stringify(LIST));
});

// Get the modal
 var modal = document.getElementById("modal");

// // Get the button that opens the modal
 var btn = document.getElementById("btn");
 btn.onclick = function() {
     modal.style.display = "block";
    }