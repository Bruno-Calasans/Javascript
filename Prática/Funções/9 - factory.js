
    // function factory
    function criarPessoa(nome, sobrenome){

        return {
            nome: nome,
            sobrenome: sobrenome
        }
    }

    let x = criarPessoa('João', 'Fernando')
    x
    

    // mais um exmeplo
    function criarProduto(nome, preço, desconto = 0.1){

        return{
            nome: nome,
            preço: preço,
            desconto,
            getNome: function(){return nome}
        }
    }

    let produto1 = criarProduto('Miojo', 10)
    console.log(produto1.getNome())