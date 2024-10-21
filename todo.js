let input = document.getElementById('input')
let button = document.getElementById('btn')
let list = document.getElementById('todolist')

let todos=[];
window.onload=()=>{
    todos = JSON.parse(localStorage.getItem('todos'))
    todos.forEach((todo)=>addtoodo(todo))
}

button.addEventListener("click",()=>{
    todos.push(input.value)
    addtoodo(input.value)
    input.value=''
})

function addtoodo(todo){
    let para = document.createElement('p');
    para.innerText=todo
    list.appendChild(para)
    localStorage.setItem('todos',JSON.stringify(todos))
    para.addEventListener("click",()=>{
        para.style.textDecoration='line-through'
        remove(todo)
    })
    para.addEventListener("dblclick",()=>{
        list.removeChild(para);
        remove(todo)
    })
}

function remove(todo){
    let index = todos.indexOf(todo)
    if(index>-1){
        todos.splice(index,1)
    }
    localStorage.setItem('todos',JSON.stringify(todos))
}
