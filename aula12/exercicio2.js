class Item{
    #id 
    #title
    #available

    constructor(id, title){
        if(!title){
            return console.log("O title não pode ser Nulo")
        }

        this.#id = id
        this.#title = title
        this.#available = false
        }


get id() {
    return this.#id;
    }
get title() {
    return this.#title;
    }
get available() {
    return this.#available;
    }

MudarTitle(novoTitle){
    if(this.#title != null){
        return this.#title = novoTitle

            }
    }
MudarAvailable(novoavailable){
    if(this.#available != null){
        return this.#available = novoavailable

            }
    }
}

class Book extends Item{
    #autor

    constructor(id, title, autor){
        if(!autor){
            return "Deve ter o nome do autor"
        }
        this.#autor = autor
        super(id, title)        
    }
}

class Movie extends Item{
    #duration

    constructor(id,title, duration){
        if (duration < 0) {
            return 1
        }

        super(id,title)
        this.#duration = duration
    }
}

// const teste3 = new Item(1, 'testew')
const teste = new Movie(1, "A volta dos que não foram", 120)
// const teste2 = new Book(2,"Sherlock","Very good", "Artur")