
    // this em uma função normal -----------------------------------------------
    function compararThisNormal(param){
        return param === this
    }

    // comprando com o objeto global
    // global => objeto global do ambiente de execução do node
    // window => objeto global do browser

    console.log(compararThisNormal(global)) // no ambiente de execução

    // usando o bind com função normal
    const obj = {}
    x = compararThisNormal.bind(obj)

    console.log(x(global)) // this não se refere ao objeto global
    console.log(x(obj)) // this se refere ao objeto 'obj'

    // this em uma função arrow -----------------------------------------------
    let compararThisArrow = (param) => this === param

    // comparando com objeto global
    console.log(compararThisArrow(global)) // não se refere ao objeto global
    console.log(compararThisArrow(module.exports)) // se refere ao arquivo atual

    // usando o bind com arrow
    y = compararThisArrow.bind(obj)
    console.log(y(obj))
