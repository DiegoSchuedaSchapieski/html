class Conta{
    #senha
    #agencia
    #n_conta
    #titular
    #saldo

    constructor(senha, agencia, n_conta,titular, saldo){
        this.#senha = senha
        this.#agencia = agencia
        this.#n_conta = n_conta
        this.#titular = titular
        this.#saldo = saldo
    }    
    get saldo() {
        return this.#saldo;
    }
    // set saldo(value) {
    //     this.#saldo += value;
    // }
    
    depositar(n_conta, agencia,valor){
        if(n_conta == this.#n_conta && agencia === this.#agencia){
            return this.#saldo += valor
        }
    }
}

const c1 = new Conta("1234","111","40028922","Diego", 1500)

// c1.depositar("40028922","111", 50)

console.log(c1.saldo)

