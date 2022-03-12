
    function Teste(a=0, b=10, c=99){

        this.a = a
        this.b = b
        this.c = c

        this.fazer = function(){ return 'Fazendo algo'}
    }

    // Métodos Globais
    const teste1 = new Teste(10, 'nada', 9)

    // relacionados com métodos e proprieades-----------------------------------

    // usando Object.keys()
    let array1 = Object.keys(teste1)
    array1

    // usando Object.values()
    let array2 = Object.values(teste1)
    array2

    // usando object.entries()
    console.log(Object.entries(teste1))

    // usando o object.assign()
    const obj = {a: 100}
    const a = {a: 9, b: 10, info(){return 'sou o objeto a'}}
    const b = {a:50, c: 'teste'}
    const novoObj = Object.assign(obj, a, b)
    novoObj

    // usando o object.defineProperty()
    Object.defineProperty(teste1, 'novoAtributo', {
        enumerable: true, 
        writable: false,
        value: 100})
    teste1
    teste1.novoAtributo = 'nada'
    console.log(teste1.novoAtributo)

    // relacionados com protoype -----------------------------------

    // antes de fazer prototype
    console.log(teste1.hasOwnProperty('a'))

    //depois de fazer prototype
    Teste.prototype.d = 0
    console.log(teste1.hasOwnProperty('d'))

    // Relacionados com restrições -----------------------------------
    const objeto = {
        nome: 'nenhum', 
        desc: 'sou um objeto', 
        info(){return this.desc}
    }

    // usando o object.preventExtensions()
    Object.preventExtensions(objeto)
    console.log(Object.isExtensible(objeto)) // verifica se é extensível

    objeto.nome = 'nada' // posso mudar métodos e atributos
    objeto.novo = 'novo atributo' // não posso criar novos métodos ou atributos
    delete objeto.desc // posso deletar métodos ou atributos
    objeto


    // usando object.seal()
    Object.seal(objeto) // selando objeto
    console.log(Object.isSealed(objeto)) // verificando se está selado

    objeto.nome = 'selado' // posso modificar atributos e métodos
    objeto.novo = 'novo atributo' // não posso adicionar atributos e métodos
    delete objeto.info() // não consigo deletar tatributos ou métodos
    objeto

    // usando o object.freeze()
    Object.freeze(objeto)
    console.log(Object.isFrozen(objeto)) // verificando se está congelado

    objeto.nome = 'congelado' // não modificar atributos e métodos
    objeto.novo = 'novo atributo' // não posso adicionar atributos e métodos
    delete objeto.info()  // não posso excluir atributos ou métodos
    objeto
    
    
   

  
    