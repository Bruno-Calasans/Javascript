//criando array
var comidas = ['pão', 'banana', 'carne', 'suco']//primeira forma
var roupas = ['camiseta',
            'short',
            'blusa',
            'sapato']//segunda forma
var veiculos = new Array('bicicleta', 'carro', 'moto', 'caminhão')//terceira forma

//console.log(comidas, roupas, veiculos)

//Acessando os elementos de um array

console.log(comidas)//todos os elementos
console.log(comidas[3])//um elemento
//console.log(comidas)

// Forma fácil de inserir elemento
comidas[0] = 'sopa'
roupas[10] = 'vestido'
console.log(comidas, roupas)

// como saber se é um array ou n?
console.log(Array.isArray(comidas))
console.log(comidas instanceof Array)

// principais atributos de arrays
console.log(veiculos.length)
console.log(veiculos[veiculos.length-1])//acessando último elemento

// principais métodos de arrays

// removendo elementos
console.log(veiculos.shift())//retira e retorna o primeiro
console.log(veiculos.pop())//retira e retorna o último elemento


//adicionado um ou vários elementos
console.log(veiculos.unshift('balão', 'skate'))
console.log(veiculos.push('avião', 'barco'))//adiciona um elemento ao final do array
console.log(delete veiculos[0])

