
    // estrutrua try...catch
    function meuNome({name}){

        try{
            return name.toUpperCase()

        }catch(erro){
            return erro
        }

    }

    const Pessoa =  {
        nome: 'João'
    }

  console.log(meuNome(Pessoa))

    // RangeError
    let num = 1
    try{
        num.toPrecision(1000)

    }catch(error){
        console.log(error)
    }


    // ReferenceError
    let x = 10
    try{
        console.log(x + y)

    }catch(error){
        console.log(error)
    }

    // SyntaxError
    try{
        log(8)

    }catch(error){
        console.log(error)
    }

    // TypeErrpr
    let n = 10
    try{
        n.toLowerCase()

    }catch(error){
        console.log(error)
    }

    