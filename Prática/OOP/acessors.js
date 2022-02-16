
    // acessors

    const pessoa = {
        nome: 'Tobi',
        idade: 20,
        estudando: true,
        trabalhando: false,
        // getters
        get n(){return this.nome},
        get i(){return this.idade},
        get e(){return this.estudando},
        get t(){ return this.trabalhando},

        // setters
        set sNome(novoNome){this.nome = novoNome},
        set sIdade(novaIdade){this.idade = novaIdade},
        set sEsutando(novoEstado){this.estudando = novoEstado},
        set sTrabalhando(novoEstado){this.trabalhando = novoEstado}
    }

    // usando getters
    console.log(pessoa.n)
    console.log(pessoa.i)
    console.log(pessoa.e)
    console.log(pessoa.t)

    // usando setters
    pessoa.sNome = 'Francisco'
    pessoa.sidade = '39'
    pessoa.estudando = false
    pessoa.sTrabalhando = true

    