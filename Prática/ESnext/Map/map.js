

    // criando um map
    const meuMap = new Map([
        ['teste1', 'adsd'], // chave sendo string
        [0, true], // chave sendo um número
        [{nome: 'fernando', idade: 80}, 'pessoa'], // chave sendo um objeto
        [false, 40] // chave sendo um boolean
    ] 
    )

    // mostrando o map
    meuMap

    // inserindo novos elementos no map
    meuMap.set('nova chave', 999)
    meuMap
    
    // substituindo elementos
    meuMap.set('teste1', false)
    meuMap

    // pegando valores do map
    console.log(meuMap.get('teste1'))

    // deletando elementos
    meuMap.delete(0)
    meuMap

    // verificando se um map tem uma determinada chave
    console.log(meuMap.has('nova chave'));

    // pegando todas as chaves e valores
    for(let elemento of meuMap.entries()){
        console.log(elemento);
    }
    
    // vendo a quantidade de elementos no map
    console.log(meuMap.size);

    // pegando todos os valores
    console.log(meuMap.values());
    

    