
    // Todo tipo de dado em JS será originado 
    // através das funções construturas abaixo
    console.log(typeof Object)
    console.log(typeof String)
    console.log(typeof Boolean)
    console.log(typeof Number)
    console.log(typeof Array)
    console.log(typeof Date)
    console.log(typeof Function)

    // todas as funções construtoras são instâncias da função construtora Object
    console.log(Object instanceof Object)
    console.log(String instanceof Object)
    console.log(Boolean instanceof Object)
    console.log(Array instanceof Object)
    console.log(Date instanceof Object)
    console.log(Function instanceof Object)

    // criando funcionalidades para todos os tipos de dados
    Object.prototype.isString = function(){ // verifica se é string
        if(this.constructor == String) return true; else return false
    }
    console.log('teste'.isString())

    Object.prototype.isBool = function(){ // verifica se é boolean
        if(this.constructor == Boolean) return true; else return false
    }
    console.log('teste'.isBool())

    Object.prototype.isNumber = function(){ // verifica se é number
        if(this.constructor == Number) return true; else return false

    }
    console.log((90).isNumber())

    Object.prototype.isObj = function(){ // verifica se é objeto
        if(this.constructor == Object) return true; else return false
    }
    let x = {}
    console.log(x.isObj())

    Object.prototype.isArray = function(){ // verifica se é array
        if(this.constructor == Array) return true; else return false
    }
    let y = []
    console.log(y.isArray())

    Object.prototype.isDate = function(){ // verifica se é Date
        if(this.constructor == Date) return true; else return false
    }
    let z = new Date
    console.log(z.isDate())

    Object.prototype.isFunction = function(){ // verifica se é uma função
        if(this.constructor == Function) return true; else return false
    }
    let w = function(){return 'Sou uma função'}
    console.log(w.isFunction())


    

    

    




    

    
    

    

    
