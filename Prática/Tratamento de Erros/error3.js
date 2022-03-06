

    // usando o finally
    function msg(text){

        try{
            if(typeof text != 'string') throw 'Não é uma string'
            return text

        }catch(error){
            return 'Error: '+error

        }finally{
            console.log('Fim da função')

        }
    }

    console.log(msg(10))

    console.log(.constructor)