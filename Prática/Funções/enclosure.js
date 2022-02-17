

    // function closure
    function funçãoExterna(varExterna){

        return function funçãoInterna(varInterna){
            console.log('Variável externa: ' + varExterna)
            console.log('Variável interna: ' + varInterna)

        }

    }

    const teste = funçãoExterna('fora')
        
    // chamando a função guardada dentro de teste
    teste()

    // mais um exemplo
    function criarCont(){
        let cont = 0

        return function contar(){
            cont += 1
            return cont
        }
    }

    const objetoCont = criarCont()
    console.log(objetoCont())
    console.log(objetoCont())
    console.log(objetoCont())

    