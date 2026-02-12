
function adicionar(){
    let add = document.getElementById("adicionar") // chama o conteudo
    let item = document.createElement("li") // chama a lista
    let lista = document.getElementById("lista")
    let button = document.createElement('button')
    item.innerHTML = add.value
    lista.appendChild(item)
    button.textContent = "Deletar"
    item.appendChild(button)

    
    button.addEventListener('click', () =>{
    button.parentElement.remove()
})
}
document.addEventListener("keypress", (e) => {
    if(e.key == "Enter"){
        adicionar()
    }
})
    dispatchEvent.append(button)

