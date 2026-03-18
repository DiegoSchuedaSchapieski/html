class Automovel {

        #modelo
        #marca
        cor
        #ano
        #motor
    constructor(modelo, marca, ano, motor, cor){
        this.#modelo = modelo
        this.#marca = marca
        this.ano = ano
        this.#motor = motor
        this.cor = cor
    }

    acelerar() {
        return `o veiculo ${this.#modelo} ${this.#marca} está acelerando`
    }
    frear() {
        return `o veiculo ${this.#modelo} ${this.#marca} está freando`
    }
}
const carro1 = new Automovel("Corsa","Chevrolet","2000","Preto","1.6")
const carro2 = new Automovel("Vectra","Chevrolet","2000","Preto","1.6")

class Carro extends Automovel{
    abrirPortas(){
        return "Abrindo as portas"
    }
}

class Moto extends Automovel{
    grau(){
        return "Olha o grau"
    }}

const carro = new Carro("X1","BMW","Branco",2018,"2.0L",)
const moto = new Moto("S1000","BMW","Azul",2025,"1000cc")

console.log(carro.acelerar())
console.log(moto.grau())
