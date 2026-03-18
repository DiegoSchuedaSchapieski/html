class User{
    #id
    #name
    #email
    #password
    #active
    
    constructor(id,name,email,password,active = true){
        this.#id = id
        this.#name = name
        this.#email = email
        this.#password = password
        this.#active = active
    }

    get id() {
        return this.#id;
    }
    get name() {
        return this.#name;
    }
    set name(novoNome) {
        return this.#name == novoNome;
    }
    get email() {
        return this.#email;
    }
    set email(Novoemail) {
        return this.#email == Novoemail;
    }
    get password() {
        return this.#password;
    }
    set password(Novapassoword) {
        return this.#password == Novapassoword;
    }
    get active() {
        return this.#active;
    }
    set active(Novoactive) {
        return this.#active == this.#active;
    }


        Cadastro(){
            if(this.#name != null && this.#email.icludes("@") &&  this.#password.lenght >= 6 && this.#active == true)
                return 'Usuário ${this.$name} validado com sucesso';
            else{
                return 'deu ruim'
            }

        }
        Mudarnome(novoNome){
            if(this.#name != null)
                return this.#name == novoNome
    }
        Mudaremail(novoEmail){
            if(this.#email.icludes("@"))
                return this.#email == novoEmail
    }
        MudarPassword(novoPassword){
            if(this.#password.lenght)
                return this.#password == novoPassword
    }

}


class Admin extends User{
    construtor(id, name){
        super(id,name)
    }
}

class client extends User{
    construtor(id, name){
    super(id,name)
}

}

class Client extends User{
    construtor()
}
