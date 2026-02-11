function somar(){
    let x1 = Number(document.getElementById('n1').value)
    let x2 = Number(document.querySelector('#n2').value)

    let resposta = document.querySelector('#resposta')

    let soma = x1 + x2

    resposta.innerHTML = soma

    alert(x1 + x2)
    
}
function imagem(){
    let imagem = document.getElementById('imagem')
    imagem.setAttribute('src', "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/53/68/02.jpg")
}