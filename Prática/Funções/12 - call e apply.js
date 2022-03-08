

// formas de chamar uma função
function getNomeCompleto(){
    return this.nome+' '+this.sobrenome
}

const Pessoa = {
    nome: 'João',
    sobrenome: 'Pedro'
}

// exemplo 1: usando o apply e call - semelhanças
console.log(getNomeCompleto.call(Pessoa))
console.log(getNomeCompleto.apply(Pessoa))

function info(moeda, imposto = 0.5){
    return `${this.nome} custa ${moeda} ${this.custo * (1 + imposto)}`

}

function Produto(nome, custo){
    return {
        nome: nome,
        custo: custo,
    }
}

// instanciando um objeto
let produto1 = Produto('notebook', 1000)

// exemplo 2: usando apply e call - diferenças
console.log(info.call(produto1, 'R$', 0.2))
console.log(info.apply(produto1, ['R$', 0.6]))

