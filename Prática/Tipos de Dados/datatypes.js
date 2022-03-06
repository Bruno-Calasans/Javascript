
    // usando o typeof
    console.log(typeof 'teste')
    console.log(typeof 10)
    console.log(typeof 5.6)
    console.log(typeof NaN)
    console.log(typeof false)
    console.log(typeof [10, 'nada'])
    console.log(typeof {nome: 'James', idade: 30})
    console.log(typeof new Date())
    console.log(typeof null)
    console.log(typeof function(){})
    console.log(typeof x) // não declarada
    let y
    console.log(typeof y)
    

    // atributo constructor
    console.log(['nada', 10].constructor == Array)
    console.log(new Date().constructor == Date)
    console.log({nome: 'nada'}.constructor == Object)
    console.log(''.constructor == String)
    console.log(true.constructor == Boolean)
    console.log((10).constructor == Number)
    console.log(function(){}.constructor == Function)
    

    