
    // herança de classe

    // super classe/ classe-pai
    class Animal{

        constructor(nome, desc){
            this.nome = nome
            this.desc = desc
        }

        info(){
            return 'Eu sou um animal'
        }
    }

    // classe-filha/subclass
    class Gato extends Animal{
        
        constructor(nome, desc, peludo){ // próprio constructor
            super(nome, desc)
            this.peludo = peludo // próprio atributo
        }
        
        miar(){ // próprio método
            return `${this.nome} está miando`
        }

    }

    // criando um objeto da classe Gato
    const gato1 = new Gato('Nanau', 'Gosto de dormir', true)
    gato1
    

    // acessando métodos do pai
    console.log(gato1.info())

    // acessando próprios métodos
    console.log(gato1.miar())

    // acessando atributos do pai
    console.log(gato1.nome)

    // acessando atributos próprios
    console.log(gato1.peludo)

