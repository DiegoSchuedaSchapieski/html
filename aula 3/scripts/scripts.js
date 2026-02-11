let square = document.getElementById("Q1")

function chanceColor(){
    let color = document.getElementById('favcolor').value
    square.style.backgroundColor = color
}

square.addEventListener('click', chanceColor)