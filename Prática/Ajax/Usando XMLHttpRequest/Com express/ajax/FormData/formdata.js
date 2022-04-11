


    // criando um FormData com o constructor
    const formDataConstructor = new FormData

    // criando um FormData com um elemento form
    const form = document.getElementById('myForm')
    const formDataElement = new FormData(form)

    const formData = new FormData

    // método append
    formData.append('nome', 'João')
    formData.append('idade', 30)
    formData.append('trabalhando', false)

 
    // pegando chave específica
    console.log(formData.get('idade')); // retorna 30

    // mostrando todos os valores
    for(let valor of formData.values()) console.log(valor);

    // mostrando todas as chaves
    for(let chave of formData.keys()) console.log(chave);

    // mostrando todos as chaves e valores
    for(let par of formData.entries()) console.log(par);

    // vários valores para uma mesma chave com append
    formData.append('bolso', 'chiclete')
    formData.append('bolso', 'celular')
    formData.append('bolso', 'caneta')

    // exibindo todos os valores para uma mesma chave
    console.log(formData.getAll('bolso'));

    // vários valores para uma mesma chave com set
    formData.set('caixa', 'sapato')
    formData.set('caixa', 'bola')
    formData.set('caixa', 'bicicleta')

    // exibindo todos os valores para uma mesma chave
    console.log(formData.getAll('caixa')); // retorna ['bicicleta']
    

    formDataElement.onsubmit = e => {
        
        console.log(...formDataElement.entries())
        console.log('terminou');
        e.preventDefault()
    }

  
    

