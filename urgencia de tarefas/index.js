// Pegar elementos do input
//pegar ação do click
// separar as urgências de acordo com a classificação do range
// criar filhos td das linhas importante e pouco importante
// Criar ifs baseados nas ranges
//Criar uma UL dentro da TD
// botão de apagar tarefa
// capturar tecla enter
// criar limpa form e focus


let tarefa = document.querySelector("#tarefa")
let importa = document.querySelector("#importa")
let urgent = document.querySelector("#urgent")
let adicionar = document.querySelector("#adicionar")
let impeurg = document.querySelector("#impeurg")
let impnurg = document.querySelector("#impnurg")
let pimpeurg = document.querySelector("#pimpeurg")
let pimpnurg = document.querySelector("#pimpnurg")

function criali(){
    const li = document.createElement('li')
    return li
}

function criaTarefa (entraText){
    const li = criali()
    li.innerText = entraText
    if (importa.value >=3 && urgent.value >=3){
      impeurg.appendChild(li)  
    }else if (importa.value <3 && urgent.value >=3){
        pimpeurg.appendChild(li)
    }else if (importa.value >=3 && urgent.value <3){
        impnurg.appendChild(li)
    }else {
        pimpnurg.appendChild(li)
    }
    buttonLimpar(li)
}

function limpaImput (){
    tarefa.value = ""
    tarefa.focus()
}

adicionar.addEventListener('click', function(){
    criaTarefa(tarefa.value)
    limpaImput()
    
})

tarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        if(!tarefa.value)return
        criaTarefa(tarefa.value)
        limpaImput()
    }
})

function buttonLimpar (li){
    li.innerText += ""
    const but = document.createElement('button')
    but.innerText = 'x'
    but.setAttribute('class', 'apagar')
    but.setAttribute('title', 'Apagar esta Tarefa')
    li.appendChild(but)
}

document.addEventListener('click', function(e){
    const butx = e.target
    if (butx.classList.contains('apagar')){
        butx.parentElement.remove()
    }
})