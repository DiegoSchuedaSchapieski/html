// const data = async () => {
//     const people = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await people.json()
//     console.log(data)
// }

// data();

const data = require('/data.json')
//console.log(data)

const gm = data.filter((car) => {
    return(car.brand == "Chevrolet")
})

console.log(gm)

const id = data.map((car) => {
    return(car.price_brl > 90000  && car.year < 2025)
})

//console.log(id)

const gay = data.map((car) => {
    return(car.model == "Kwid")
})

//console.log(gay)

const cat = data.map((car) => {
    return(car.category == "Hatch Premium" || car.category == "Hatch")
})

//console.log(cat)


const sedan = data.map((car) => {
    return(car.category == "Sedan")
})

//console.log(sedan)

const media = data.reduce((acc, car) =>{
    return acc + car.price_brl / data.length
})
//console.log(media)

const ano = data.reduce((acc, car) =>{
    return acc + car.year / data.length
})
//console.log(ano)

const fuel = data.reduce((acc, car) =>{
    return car.fuel == "Gasoline" ? acc + 1 : acc
})

//console.log(fuel)

const soma = data.reduce((acc, car) => {
    return acc + data.price_brl
})

//console.log(soma)


const min = data.reduce((acc, car) => {
    return Math.min(acc, car.price_brl)
}, 5000)

//console.log(min)