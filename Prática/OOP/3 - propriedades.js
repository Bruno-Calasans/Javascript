

    // acessando propriedades/atributos dos objetos
    const pessoa = {nome: 'Jone', idade: 30 , peso: 60.5}

    console.log(pessoa.nome) // primeira forma
    
    console.log(pessoa['idade'])  // segunda forma

    console.log(pessoa.nome) 

    // usando for...in
    for(let atributo in pessoa){
        console.log(atributo)
    }

    // adicionando propriedades
    pessoa.trabalhando = false
    pessoa // mostrando o objeto

    // deletando propriedades
    delete pessoa.trabalhando
    pessoa // mostrando depois de deletar

    // criando objetos aninhados
    const objetos ={
        nome: 'teste',
        desc: 'criando um conjunto de objetos',
        carros: {
            carro1: 'Ford',
            carro2: 'BMW',
            carro3: 'Fiat'
        }
    }

    // acessando objetos dentro de outros objetos
    console.log(objetos.carros.carro1)
    console.log(objetos.carros['carro2'])


    // criando arrays dentro de objetos
    const conjunto = {
        nome: 'teste',
        desc: 'criando um conjunto de objetos',
        carros: [
            {nome: 'ford', modelos: ['Fiesta', 'Focus', 'Mustange']},
            {nome: 'BMW', modelos: ['320', 'X3', 'X5']},
            {nome: 'Fiat', modelos: ['500', 'Panda']}
        ]
        
    }

    // mostrando os objetos dentro do array conjunto.carros
    console.log(conjunto.carros[0])
    console.log(conjunto.carros[1])
    console.log(conjunto.carros[2])

    // iterando o array dentro do objeto com loop for...of
    let array = conjunto.carros
    for(let chave in array){ //conjunto carros é nosso array

        for(let chave2 in array[chave].modelos){
            console.log(array[chave].nome, array[chave].modelos[chave2])
        }
        
    }

