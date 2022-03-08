

    // usando function constructor-------------------------------------------
    function PessoaConstructor(nome){
        this.nome = nome,
        this.falar = function (){
            return 'Sou um objeto craido por uma function constructor'
        }
    }

    // instanciando um objeto
    let p1 = new PessoaConstructor('João')


    // usando classe---------------------------------------------------------
    class PessoaClass{
        constructor(nome){
            this.nome = nome
        }

        falar(){
            return 'Sou um objeto criado por uma classe'
        }
    }

    // instanciadno um objeto
    let p2 = new PessoaClass('Jones')


    // usando function factory----------------------------------------------
    function PessoaFactory(nome){
        return{
            nome: nome,
            falar: function(){
                return 'Sou um objeto criado por uma function factory'
            }

        }
    }

    // instanciando um objeto
    let p3 = PessoaFactory('Pedro')
    