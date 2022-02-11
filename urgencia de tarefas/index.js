let todo = document.querySelector(".todo")
let shedule = document.querySelector(".shedule")
let delegate = document.querySelector(".delegate")
let eliminate = document.querySelector(".eliminate")
const form = document.querySelector('.form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    if(!form.tasks.value){
        alert("Escreva sua tarefa")
        return
    }

    const li = criali()
    li.innerText = (form.tasks.value)
    if(form.important.checked && form.urgent.checked){
        todo.appendChild(li)
    } else if(form.important.checked && !form.urgent.checked){
        shedule.appendChild(li)
    }else if(!form.important.checked && form.urgent.checked){
        delegate.appendChild(li)
    }else {
        eliminate.appendChild(li)
    }
    buttonLimpar(li)
    limpaImput()
})

function criali(){
    const li = document.createElement('li')
    return li
}

function limpaImput (){
    form.tasks.value = ""
    form.tasks.focus()
}

function buttonLimpar (li){
    li.innerText += ""
    const but = document.createElement('button')
    but.innerText = 'x'
    but.setAttribute('class', 'delete')
    but.setAttribute('title', 'Apagar esta Tarefa')
    li.appendChild(but)
}

document.addEventListener('click', function(e){
    const butx = e.target
    if (butx.classList.contains('delete')){
        butx.parentElement.remove()
    }
})
