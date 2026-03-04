// método filter -> filtrar o vetor
// método find -> Encontrar um valor
// método reduce -> reduz 

const arr = [1,2,3,4,5]

const somaArr = arr.reduce((acc, value) => {
    return acc + value

}, 0)

const pessoas = []



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

pessoas.push(pessoa, pessoa2, pessoa3)
//console.log(somaArr)

const ageAvg = pessoas.reduce((acc, pessoa) => {
    return acc + pessoa.age / pessoas.length
}, 0)

//console.log(ageAvg)

// Mao transforma um vetor de acordo com uma condição

const arr2 = [1,2,3,4,5]

const mappedArr = arr2.map((arr) => {
    return arr * 2
})

//console.log(mappedArr)

console.log(pessoas)

const mappedPeople = pessoas.map((pessoa) => {
    return {name: pessoa.nome, lastname:pessoa.lastname}
})

console.log(mappedPeople)
   