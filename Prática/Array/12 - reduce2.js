


    let alunos = [

        {nome: 'João', notaFinal: 8, bolsista: false},
        {nome: 'Maria', notaFinal: 9.2, bolsista: true},
        {nome: 'Pedro', notaFinal: 9.8, bolsista: false},
        {nome: 'Ana', notaFinal: 5, bolsista: true}
    ]

   // desafio 1: todos os alunos sãos bolsistas?

    // primeira forma
    let bolsitas = alunos.map( e => e.bolsista)
    let resultado = bolsitas.reduce(function(acumulador, eAtual){
        return acumulador & eAtual
    })
    console.log(resultado)

    // segunda forma
    let todosBolsistas = (a, e) => a & e
    let resultado2 = bolsitas.reduce(todosBolsistas)
    console.log(resultado2)

    // desafio 2: algum aluno é bolsista?

    console.log(bolsitas) // array dos bolsistas
    // primeira forma
    let  resultado3 = bolsitas.reduce(function(a, e){
        return a || e
    })
    console.log(resultado3)

    // segunda forma
    let algumBolsista = (a, e) => a || e
    let resultado4 = bolsitas.reduce(algumBolsista)
    console.log(resultado4)

    
    
