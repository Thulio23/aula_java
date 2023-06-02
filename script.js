const listElement = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")

const tarefas = JSON.parse(localStorage.getItem("list")) || []

//listar a lista
function renderTarefas() {
    listElement.innerHTML = ""
    for (const iterator of tarefas) {
        console.log(iterator)
        const tarefaElement = document.createElement("li")
        const tarefaText = document.createTextNode(iterator)

        //deletar um elemento da lista
        const linkElement = document.createElement("a")
        linkElement.setAttribute("href", "#")

        const pos = tarefas.indexOf(iterator)
        linkElement.setAttribute("onclick", `deleteTarefa(${pos})`)

        const linkText = document.createTextNode(" excluir")
        linkElement.appendChild(linkText)

        //appends
        tarefaElement.appendChild(tarefaText)
        tarefaElement.appendChild(linkElement)
        listElement.appendChild(tarefaElement)
    }
}
renderTarefas()

//adicionar item à lista
function addTarefas() {
    const tarefaText = inputElement.value
    console.log(tarefaText)
    tarefas.push(tarefaText)
    renderTarefas()
    saveToStorage()
}
buttonElement.onclick = addTarefas

//funcionar o excluir
function deleteTarefa(pos){
    tarefas.splice(pos, 1)
    renderTarefas()
    saveToStorage()
}

//salvar elementos
function saveToStorage() {
    localStorage.setItem("list", JSON.stringify(tarefas))
}