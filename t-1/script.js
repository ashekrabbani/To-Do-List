const todoinput = document.querySelector(".todo-input")
const btn = document.querySelector(".btn")
const todo = document.querySelector(".todo ul")
const edit = document.querySelector(".edit")
const dlt = document.querySelector("#dlt")

const addtodo = (text) => {
    if(text){
        const newtodo =`
                <li class="stodo">
                    <div>
                    <button class="btn1 edit"><i class="fa-regular fa-calendar-check check"></i></i></button>
                    <span class="gm">
                        ${text}
                    </span>
                    </div>
                    <div class="icon">
                        <button class="btn1 edit"><i class="fi fi-rr-edit editbtn"></i></button>
                        <button class="btn1" id="dlt"><i class="fi fi-rr-trash dltbtn"></i></button>
                    </div>
                </li>
        `
        todo.innerHTML += newtodo
        todoinput.value = "";
        todoinput.focus()
    }
}

const editTodo = (text) =>{
    let newTodo = prompt('Edit todo', text.trim())
    if(!newTodo){
        newTodo = prompt('Edit todo', text.trim())
    }else{
        return newTodo
    }
}

todo.addEventListener('click', (e) => {
 
    if(e.target.classList.contains('stodo')){
        e.target.classList.toggle('cplttodo');
        // e.target.classList.toggle('open');
    }

    if(e.target.nodeName === "SPAN"){
    e.target.parentElement.parentElement.classList.toggle('cplttodo')};

    
    if(e.target.classList.contains('dltbtn')){
       e.target.parentElement.parentElement.parentElement.remove()
        // const span = document.querySelector(".gm");
        // console.log(span)
        // span.classList.toggle('dlttodo');
    }

    if(e.target.classList.contains('check')){
        // const span = document.querySelector(".gm");
        const span = e.target.parentElement.parentElement.parentElement.querySelector("span");
         span.classList.toggle('dlttodo');
    }

    // if(e.target.classList.contains('editbtn')){
    //     let todoedited =e.target.parentElement.parentElement.parentElement.querySelector("span").innerText;

    //     document.querySelector(".todo-input").value = todoedited

    // }
    if(e.target.classList.contains('editbtn')){
        const editedtodo = editTodo(e.target.parentElement.parentElement.parentElement.querySelector("span").innerText)
        e.target.parentElement.parentElement.parentElement.querySelector("span").innerHTML = `
        <span class="gm">
            ${editedtodo}
        </span>`
    }
 })

 btn.addEventListener('click', () => {
    addtodo(todoinput.value)
})

document.addEventListener('keyup', (e) =>{
    if (e.key === 'Enter'){
        addtodo(todoinput.value)
    }
})

////Hey SeloraX


// todo.addEventListener('click', (e) => {
//         let li = e.target.closest(".stodo");
//         let gmSpan = li.querySelector(".gm");
//         gmSpan.classList.toggle("cplttodo");

//         if (!li) return;
//         li.classList.toggle("open");
// })