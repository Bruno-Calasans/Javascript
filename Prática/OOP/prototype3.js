
    // verificando
    console.log(typeof Function.prototype)
    console.log(typeof Object.prototype)
    
    // prototype de um objeto criado a partir de uma função construtura
    function MeuObjeto(){
        this.info = "Sou da função construtura 'MeuObjeto'"
    }
    const obj2 = new MeuObjeto

    // verificando prototypes
    console.log(obj2.__proto__)
    console.log(obj2.__proto__ == MeuObjeto.prototype)
    console.log(MeuObjeto.__proto__ == Function.prototype)
    console.log(Function.prototype.__proto__ == Object.prototype)
    console.log(Object.prototype.__proto__ == null)

