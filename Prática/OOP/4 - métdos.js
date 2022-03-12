
    // criando métodos
    const pessoa = {
        nome: 'carlos',
        idade: 30,
        // forma antiga
        andar: function(){
            console.log(pessoa.nome + ' está andando')
        },
        correr: () => {
            console.log(pessoa.nome + ' está correndo')
        },
        // forma nova
        comer(){this.nome + ' está comendo!'},
        girar(){this.nome + ' está girando'}

    }

    // acessando o método
    pessoa.andar()
    pessoa.correr()
    
