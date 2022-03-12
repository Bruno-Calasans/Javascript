
    // observações ------------------------------------------------------------
    console.log(typeof Array) // função construtura Array
    console.log(typeof new Array) // objeto usando a função construtura Array
    
    //criando array-------------------------------------------------------------

    // primeira forma - array literal
    let comidas = ['pão', 'banana', 'carne', 'suco']

    // segunda forma - array literal multi-linha
    let roupas = ['camiseta',
                'short',
                'blusa',
                'sapato']

    // terceira forma - instanciação de objeto(não recomendável)
    let veiculos = new Array('bicicleta', 'carro', 'moto', 'caminhão')

    // acessando elementos------------------------------------------------------
    let array = [1, 10, 'nada', 30]

    console.log(array[0]) // primeiro elemento
    console.log(array[2]) // terceiro elemento
    console.log(array) // acessando todos os elementos

    // adicionando elementos ---------------------------------------------------
    console.log(array) 
    array[1] = 'novo elemento'// substituindo elementos existentes
    console.log(array) 

    console.log(array) 
    array[10] = 'mais outro elemento' // criando espaços vazios
    console.log(array)
    console.log(array[6])

    // verificando se é ou não um array ----------------------------------------

    console.log(Array.isArray(array)) // primeira forma

    console.log(array instanceof Array) // segunda forma

    