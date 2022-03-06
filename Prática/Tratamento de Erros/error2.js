
    // usando o throw

    // throw 'Erro' // usando string
    // throw 9.6 // usando números
    //throw true // usando boolean
    /*throw {
        nome: 'Error',
        desc: 'sou a descrição do erro'
    }*/

    // usando o block try..throw..catch
    function somar(a, b){

        try{

            if(a == '' || b == '') throw {nome:'Vazio', msg: 'Números vazios'}
            if(typeof a != Number || typeof b != Number) throw {nome:'Non-Number', msg: 'Não é um número'}
            return a + b

        }catch(error){
            return error.msg
        }
    }

   console.log(somar('h', 'g'))
   
