

    // função callback

    // função mais comum que usa callback
    setTimeout(()=>{
        console.log('Testando');

    }, 3000)


    // mais um exmeplo
    function mostrar(algo){
        console.log('Mostrando ' + algo)

    }

    function somar(a, b, callback){
        let soma = a + b
        callback(soma)
    }

    somar(10, 20, mostrar)


