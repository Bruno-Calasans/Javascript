
function Fruta(nome, cor, sabor){
    this.nome = nome
    this.cor = cor
    this.sabor = sabor
}

// adicionado atributo e método a um constructor 
Fruta.prototype.podre = false // adicionando atributo
Fruta.prototype.comer = function()
{return `Comendo ${this.nome}`} // adicionando método
const fruta1 = new Fruta('banana', 'amarela', 'doce')

// acessando os novos método e atributo
console.log(fruta1.podre)
console.log(fruta1.comer())
console.log(fruta1)
Boolea

