
// usando o reduce()
let alunos = [

    {nome: 'João', notaFinal: 8, bolsista: true},
    {nome: 'Maria', notaFinal: 9.2, bolsista: true},
    {nome: 'Pedro', notaFinal: 9.8, bolsita: false},
    {nome: 'Ana', notaFinal: 5, bolsista: false}
]

// exemplo 1
let getNotas = e => e.notaFinal
let notas = alunos.map(getNotas)
let resultado = notas.reduce(function (acumulador, elementoAtual, i){
    console.log(`[Index ${i}: ${acumulador}, ${elementoAtual}]`)
    return acumulador + elementoAtual
})

console.log(notas)
console.log(resultado)

// exemplo 2
let resultado2 = notas.reduce(function (acumulador, elementoAtual){
    return acumulador + elementoAtual
}, 10) // valor inicial = 10
console.log(resultado2)

// exemplo 3