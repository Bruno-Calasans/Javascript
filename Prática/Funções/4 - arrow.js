    // arrow function ----------------------------------------------

    // sem return
    const arrowFunction = (nome, sobrenome) => `${nome} ${sobrenome}` 
    console.log(arrowFunction('James' ,'Jones'));

    // com um parâmetro
    const msgBoasVindas = nome => 'Olá, '+ nome 
    console.log(msgBoasVindas('John'))

    // com ou sem parâmetros
    const teste = _ => 'Olá'
    console.log(teste())

    