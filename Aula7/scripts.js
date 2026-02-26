let x = [1, 2, {name: "Artur", last:"Oliveira"}, 4]
//Sconsole.log(x)
// push ele adiciona um elemento e o pop ele apaga o último elemento o dequete apaga o primeiro
const pessoas = []
//Sconsole.log(pessoas)
pessoas.push("Diego")


const pessoa =  {
    nome: "Erich", 
    lastname : "Natal",
    age: 19
}
const pessoa2 =  {
    nome: "Diego", 
    lastname : "Schueda",
    age:20
}
const pessoa3 =  {
    nome: "Allan", 
    lastname : "Camilo",
    age:21
}

pessoas.push(pessoa)
pessoas.push(pessoa2)
pessoas.push(pessoa3)
//console.log(pessoas)

const filteredPeople = pessoas.filter((p) => p.age >= 20)



const findErich = pessoas.find((p) => p.nome == "Erich") 

console.log(findErich)
// console.log(filteredPeople)

let container = document.getElementById('container')

function createCard(pessoa){
    let div = document.createElement('div')
    let span = document.createElement('span')
    span.innerHTML = `${pessoa.nome} ${pessoa.age}` 
    div.appendChild(span)

    return div
}

pessoas.forEach(pessoa => {
    const card = createCard(pessoa)
    container.appendChild(card)
})