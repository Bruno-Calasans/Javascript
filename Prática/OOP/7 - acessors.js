
    // acessors
    const pessoa = {
        nome: 'Tobi',
        idade: 20,
        estudando: true,
        trabalhando: false,
        desc: 'sou uma pessoa',
        
        // getters
        get n(){return this.nome},
        get i(){return this.idade},
        get e(){return this.estudando},
        get t(){ return this.trabalhando},

        // setters
        set sNome(novoNome){this.nome = novoNome},
        set sIdade(novaIdade){this.idade = novaIdade},
        set sEsutando(novoEstado){this.estudando = novoEstado},
        set sTrabalhando(novoEstado){this.trabalhando = novoEstado},

        // getter e setter com mesmo nome
        get info(){return this.desc},
        set info(texto){this.desc = texto}
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
    
    console.log(pessoa.info)
    pessoa.info = 'teste'
    console.log(pessoa.info)

    