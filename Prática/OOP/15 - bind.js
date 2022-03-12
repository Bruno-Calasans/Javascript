

    // criando um objeto
    const Pessoa = {
        nome: 'Pedro',
        idade: 30,
        falar(){
            return `${this.nome} está falando!`
        }
    }

    // sem o bind
    const x = Pessoa.falar
    console.log(x())

    // com o bind
    const y = Pessoa.falar.bind(Pessoa)
    console.log(y())

    // outro exemplo
    function contador(){
        inicio = 0
        setInterval(()=>{
            inicio++
            console.log('Número: '+inicio)

        }, 3000)

    }
    console.log(this)
    