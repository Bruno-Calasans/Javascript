
    // criando um set
    const mySet = new Set(['Brasil', 'EUA', 'Japão'])

    // adicionando elementos
    mySet.add('Argentina').add('França')

    mySet

    // adicionando valores repetidos
    mySet.add('Brasil')
    mySet

    // verificando se temos algum elemento
    console.log(mySet.has('França'));

    // deletando elementos
    mySet.delete('EUA')
    console.log(mySet);

    // deltando todos os elementos
    //mySet.clear()
    mySet

    // verificando o tamanho do set
    console.log(mySet.size);

    // pegando todas ops valores
    let valores = mySet.values()
    for(let valor of valores){
        console.log(valor);
    }
    


  
    
