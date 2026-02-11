let square = document.getElementById("Q1") // id do quadrado

function chanceColor(){
    let color = document.getElementById('favcolor').value // pegar a cor
    square.style.backgroundColor = color // mudar a cor
}

square.addEventListener('click', chanceColor) // caso ocorra o click, ele mudará de cor