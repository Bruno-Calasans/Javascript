
// solução 1
function despesaTotal1(array=[]){

    let despesas = 0
    for(let produto of array){
        despesas += produto.preco
    }
    return despesas
}

let produtos = [
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]

let produtos2 = [
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ]

console.log(despesaTotal1(produtos))
console.log(despesaTotal1(produtos2))

// solução 2
function despesaTotal2(array=[]){
    let despesas = 0
    despesas = array.map((e) => e.preco).reduce((a, e) => a + e)
    return despesas
}

console.log(despesaTotal2(produtos))
console.log(despesaTotal2(produtos2))

// solução 3
function despesaTotal3(array=[]){

    return array.reduce(
    (acumulador, elementoAtual) => acumulador + elementoAtual.preco, 0)
}
console.log(despesaTotal3(produtos))
console.log(despesaTotal3(produtos2))