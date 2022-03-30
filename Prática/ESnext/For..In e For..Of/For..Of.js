


    // estrutura For..Of

    // em strings --------------------------------------------------------------
    const string = 'Sou uma frase'
    for(let letra of string){
        console.log(letra);
    }

    // em arrays ---------------------------------------------------------------
    const array = ['Marcos', 30, false]
    for(let elemento of array){
        console.log(elemento);
    }

    // em maps -----------------------------------------------------------------
    const map = new Map([
        ['Nome', 'Ricardo'],
        ['idade', 30],
        ['trabalhando', false]
    ])

    // chaves e valores
    for(let elemento of map){
        console.log(elemento);
    }

    // separando as chaves e valores com destructuring
    for(let [chave, valor] of map){
        console.log(chave, valor);

    }

    // apenas as chaves
    for(let chave of map.keys()){
        console.log(chave);
    }

    // apenas os valores
    for(let valor of map.values()){
        console.log(valor);
    }

    // em sets -----------------------------------------------------------------
    const set = new Set(['a', 'b', 'c', 'd'])

    for(let letra of set){
        console.log(letra);
    }

    // em objetos --------------------------------------------------------------
    const obj = {nome: 'Hon', idade: 90, trabalhando: false}

    // objeto não é iterable, protanto não podemos usar o for..of



