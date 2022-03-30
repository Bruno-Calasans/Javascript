

    // for in
    

    // em objetos
    const obj = {nome: 'Jeremias', idade: 30, trabalhando: false}
    for(let propriedade in obj){
        console.log(propriedade);
    }

    // em arrays
    const array = ['joão', 56, true]
    for(let elemento in array){
        console.log(elemento);
    }

    // em map
    const map = new Map([
        ['nome', 'Pedro'], 
        ['idade', 25], 
        ['trabalhando', false]
    ])

    for(le in map){
        console.log(...chave);
    }

