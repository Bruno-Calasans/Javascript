// criando um array

var teste = ['teste', 'bosta', 10, 1.2] // primeira forma( uma linha)

var teste2 = ['nada', // segudna forma (várias linhas)
            'teste',
            100,
            9.8,
            90]

            
var teste3 = new Array('valor1', 10, 7.6) // terceira forma (não recomendável)

// adicionando elemento em uma array
//teste[90] = 'testando'
var array1 = [3, 1, 4, 100]
console.log(array1.sort())

var array2 = ['palito', 'teste', 'nada', 'azul', 'você']
console.log(array2.copyWithin(4, 1, 2))



// Como saber se é um array
console.log(Array.isArray(teste)) // primeira forma
console.log(teste instanceof Array) // segunda forma

// percorrendo um array
var teste3 = ['nada',
            'teste',
            100,
            9.8,
            90]


for (var elemento of teste3)
    console.log(elemento)

    
// adicionado array dentro de array
var mochila = []
var item1 = ['faca', 1], item2 = ['granada', 3], item3 = ['pistola', 30];
mochila.push(item1, item2, item3)
console.log(mochila[0][0])
