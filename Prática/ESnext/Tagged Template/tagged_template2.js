

// separando e reconstruindo uma template string usando tagged template
function teste(valor, ...valores){

    let array = []
    valores.forEach((e, i) => {
        array.push(valor[i], e)
    })

    if(valores.length == 0) return valor.join('')
    return array.join('')

}

console.log(teste `Tudo pode ${100} ser assim `);

// exemplo prático - transformando todos os números no formato monetário
function real(valor, ...valores){

    valor
    valores

    let junção = []

    valores.forEach((e, i) =>{

        // verificando se o elemento do array valores é um número
        e = isNaN(e) ? e : `R$${e}`

        // primeiro insere o elemento do array valor, depois o número monetário
        junção.push(valor[i], e)
    })

    return junção.join('')
}

console.log(real `Um caderno valia ${10}, mas passou a valer ${25}`);
