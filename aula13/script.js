class Animal{
    #Nome_cientifico
    #Peso
    #Alimentacao

    constructor(Nome_cientifico,Peso, Alimentacao){
        this.#Nome_cientifico = Nome_cientifico
        this.#Peso = Peso
        this.#Alimentacao = Alimentacao
    }


    EmitirSom(){
        console.log("Emitindo som...")
    }

    Locomover(){
        console.log("Animal se locomovendo")
    }
}

class Cachorro extends Animal{
    EmitirSom(){
        console.log("Au Au")
    }
}

class Gato extends Animal{
    EmitirSom(){
        console.log("Miau Miau")
    }
}

const dog = new Cachorro("Dogos Latindus", 20, "Carnívoro")
const cat = new Gato("Gatilis Miandus", 5, "Qualquer coisa")

dog.EmitirSom()
cat.EmitirSom()