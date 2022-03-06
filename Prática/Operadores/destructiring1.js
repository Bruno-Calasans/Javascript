
    // objeto
    const Pessoa = {
        nome: 'João',
        idade: 30,
        estudando: true,
        endereço: { // outro objeto
            rua: 'Professor Nato',
            num: 39,
        }
    }

    // usando destructuring em um objeto
    let {nome, idade} = Pessoa

    // o atributos do objeto passam a ser variáveis usando let
    nome
    idade

    // mudando o nome das variáveis
    const {nome: n, idade: i} = Pessoa
    n
    i

    // atributo que não existe e atribuindo valor padrão
    var {sobrenome, trabalhando:t=false} = Pessoa
    sobrenome
    t

    // acessando objetos dentro de objetos
    let {endereço: {rua:r, num}} = Pessoa
    r
    num

    // erro caso acesse subatributos de um atributo qeu não existe
    const {conta: {a, b}} = Pessoa
    
