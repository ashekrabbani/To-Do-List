const todoinput = document.querySelector(".todo-input")
const form = document.querySelector(".form")
const todos = document.querySelector(".todo ul")
const edit = document.querySelector(".edit")
const dlt = document.querySelector("#dlt")

const gettodo = () =>{
    const todo = JSON.parse(localStorage.getItem('todo')) || [];
    let alltodo = ""
    todo.map((todo, index) => {
        const newtodo =`
                <li class="stodo">
                    <div>
                    <button class="btn1 edit"><i class="fa-regular fa-calendar-check check"></i></i></button>
                    <span class="gm" >
                        ${todo.text}
                    </span>
                    </div>
                    <div class="icon">
                        <button class="btn1 edit"><i class="fi fi-rr-edit editbtn"></i></button>
                        <button class="btn1" id="dlt"><i class="fi fi-rr-trash dltbtn" data-id=${index}></i></button>
                    </div>
                </li>
        `
        alltodo += newtodo
    })
    todos.innerHTML = alltodo
}
const addtodo = (text) => {
    if(text){
        let oldtodo = JSON.parse(localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : []
        localStorage.setItem('todo',JSON.stringify([{text}, ...oldtodo]))

        todoinput.value = "";
        todoinput.focus()
        gettodo()
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

todos.addEventListener('click', (e) => {
 
    if(e.target.classList.contains('stodo')){
        e.target.classList.toggle('cplttodo');}
        if(e.target.nodeName === "SPAN"){
        e.target.parentElement.parentElement.classList.toggle('cplttodo')};

    
    if(e.target.classList.contains('dltbtn')){
      const id = e.target.getAttribute('data-id')
      let alltodos = JSON.parse(localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : []
      alltodos.splice(Number(id), 1)
      localStorage.setItem('todo', JSON.stringify(alltodos))
      gettodo()
    }

    if(e.target.classList.contains('editbtn')){
        const editedtodo = editTodo(e.target.parentElement.parentElement.parentElement.querySelector("span").innerText)
        const id = e.target.getAttribute('data-id')
        let alltodos = JSON.parse(localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : []
        alltodos.splice(Number(id), 1, {text:editedtodo})
        localStorage.setItem('todo', JSON.stringify(alltodos))
         gettodo()
    }

        if(e.target.classList.contains('check')){
        // const span = document.querySelector(".gm");
        const span = e.target.parentElement.parentElement.parentElement.querySelector("span");
         span.classList.toggle('dlttodo');
    }
 })
 gettodo()

 form.addEventListener('submit', (e) => {
    e.preventDefault()
    addtodo(todoinput.value)
})
