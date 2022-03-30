
    // resto é a parte da string sem interepolações
    function tag(resto, ...interpolações){

        console.log(resto);
        console.log(interpolações);
        return 'Nova string'
    }

    const nome = 'João'
    const idade = 30

    // usando tagged template
    console.log(tag `Olá, ${nome}. Você tem ${idade} anos`);
    

