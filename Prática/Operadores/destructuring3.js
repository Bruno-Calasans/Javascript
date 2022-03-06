
    // usando destructuring em funções - objetos
    const Pessoa = {
        nome: 'Jones',
        sobrenome: 'Etos',
        estudando: false
        
    }
    
    // função usando objeto
    function mostrarObjeto({nome, sobrenome} = {Pessoa})
    {
        console.log(`Olá, ${nome} ${sobrenome}`)
    }

    mostrarObjeto(Pessoa)

    // função usando array
    let meuArray = ['João', true]

    function mostrarArray([n1, n2]){

        let string = (n2)? '': 'não'
        console.log(`${n1} ${string} está trabalhando`)
    }

    mostrarArray(meuArray)