
    // criando um constructor
    function Pessoa(nome, sobrenome, idade, peso){

        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
        this.peso = peso

        this.andar = function(){`${this.nome} está andando`}
        this.correr = ()=>{`${this.nome} está correndo`}
    }

    // instanciando um objeto
    const pessoa1 = new Pessoa('John', 'James', 30, 56.67)
    pessoa1

    
    // adicionado método e atributos a um constructor da forma errada
    Pessoa.novo = 10
    Pessoa.novoMétodo = function(){return 'Olá'}
    const pessoa2 = new Pessoa('Agatha', 'Lu', 25, 56)
    console.log(pessoa2.novo)
    //console.log(pessoa2.novoMétodo())