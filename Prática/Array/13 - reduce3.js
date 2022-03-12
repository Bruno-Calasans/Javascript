
    // criando uma reduce
    let alunos = [

        {nome: 'João', notaFinal: 8, bolsista: true},
        {nome: 'Maria', notaFinal: 9.2, bolsista: true},
        {nome: 'Pedro', notaFinal: 9.8, bolsista: false},
        {nome: 'Ana', notaFinal: 5, bolsista: false}
    ]

    Array.prototype.reduce2 = function(callback, start, iInicial=0){

        // start = valor inicial do acumulador
        // iInicial = index inicial 
        
        // acumulador de dados do mesmo tipo
        // se não tiver valor inicial, recebe o primeiro elemento do array
        let acumulador = start?? this[0]
        
        for(let i = iInicial; i < this.length; i++){

            let key = i
            let elementoAtual = this[i]

            // resultado da operação fica no acumulador
            acumulador = callback(acumulador, elementoAtual, key, this)
        }
        return acumulador
    }
    let bolsistas = alunos.map(e => e.bolsista)
    console.log(bolsistas)

    // verificando se todos são bolsistas
    let resultado1 = bolsistas.reduce2(function (acumulador, eAtual){
        return acumulador && eAtual
    })
    console.log(resultado1)

    // verificando se tem algum bolsista
    let resultado2 = bolsistas.reduce2(function(acumulador, eAtual){
        return acumulador || eAtual
    },0)
    console.log(resultado2)


