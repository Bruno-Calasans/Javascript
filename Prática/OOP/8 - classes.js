
    // criando classes
    class Pessoa{

        constructor(nome, sobrenome, idade, sexo){
            this.nome = nome
            this.sobrenome = sobrenome
            this.idade = idade
            this.sexo = sexo
        }

        // criando um método
        info(){
            return `${this.nome} ${this.sobrenome} tem ${this.idade} anos`
        }

        // criando um getter
        get _nomeCompleto(){return this.nome+' '+this.sobrenome}

        // criando um setter
        set _mudarNome(novoNome){this.nome = novoNome}
    }

    // instancinado um objeto
    const pessoa1 = new Pessoa('Frederico', 'Thomas', 35, 'masculino')
    console.log(pessoa1)

    // chamando o método
    console.log(pessoa1.info())

    // acessando o getter
    console.log(pessoa1._nomeCompleto)

    // acessando o setter
    pessoa1._mudarNome = 'James'
    console.log(pessoa1)
    