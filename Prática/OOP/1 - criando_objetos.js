

// criando objeto literal
const meuObjeto = {nome: 'Guro', idade: 90, peso: 105.69} // primeira forma
meuObjeto // mostrando

const novoObjeto = {} // segunda forma
novoObjeto.nome = 'Pedro'
novoObjeto.idade = 52
novoObjeto.peso = 65.67
novoObjeto // mostrando

// usando a palavra new
const fruta = new Object();
fruta.nome = 'maçã'
fruta.cor = 'vermelha'
fruta.consumida = false
fruta // mostrando

// usando uma função construtora
function Pessoa(nome, idade, trabalhando){
    this.nome = nome // público
    this.idade = idade // público
    this.trabalhando = trabalhando //público
    let desc = 'Sou uma pessoa' // privado
    this.getDesc = ()=>{return desc} // público
}

const p1 = new Pessoa('João', 30, false)

// usando uma factory function
function Produto(nome, preço){

    let imposto = 0.4 // privado
    return{
        nome: nome, // público
        preçoBruto: preço, // público
        preçoLiquido: preço *(1+imposto), // público
        getImposto: ()=>{return imposto*100} // público
    }
}

const produto1 = Produto('Camiseta', 100)
produto1.nome