
    // criando métodos
    const pessoa = {
        nome: 'carlos',
        idade: 30,
        andar: function(){
            console.log(pessoa.nome + ' está andando')
        },
        correr: () => {
            console.log(pessoa.nome + ' está correndo')
        }
    }

    // acessando o método
    pessoa.andar()
    pessoa.correr()
    
