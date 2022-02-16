
// polimorfismo de substituição
class Pai{

    constructor(){
        this.a = 10
        this.b = 0
    }

    info(){
        return 'Sou a classe-pai'
    }
}

class Filha extends Pai{

    constructor(){
        super()
        this.a = 666
        this.b = 50
    }

    info(){
        return 'Sou a classe-filha'
    }
}

// criando um objeto da classe Pai
const pai1 = new Pai

// criando um objeto da classe Filha
const filha1 = new Filha;

// overriding de atributos
console.log(filha1.a)
console.log(filha1.b)

// overriding de métodos
console.log(filha1.info())

