
    // usando o filter()
    const produtos = [
        {nome: 'notebook', preco: 2499, fragil: true},
        {nome: 'iPad Pro', preco: 4099, fragil: true},
        {nome: 'copo de plástico', preco: 18.99, fragil: false},
        {nome: 'sofá', preco: 500, fragil: false}
    ]

    // exemplo 1
    let precoMais100 = produtos.filter( function(e){
        if(e.preco > 250) return true
    })
    console.log(precoMais100)

    // exemplo 2
    let frageis = produtos.filter(function(e){
        if(e.fragil) return true
    })
    console.log(frageis)

    // exemplo 3
    let produtoCaro = e => e.preco > 2000
    let fragil = e => e.fragil

    let resultado2 = produtos.filter(produtoCaro).filter(fragil)
    console.log(resultado2)


