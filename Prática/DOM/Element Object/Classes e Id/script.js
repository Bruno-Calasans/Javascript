

    // pegando o elemento
    let div = document.getElementById('div1')

    // vendo a propriedade
    console.log(div.classList);

    // selecionando uma classe
    console.log(div.classList[0]);

    // adicioando classe
    div.classList.add('classe4', 'classe5', 'classe6')
    console.log(div.classList);

    // removendo classes
    div.classList.remove('classe1', 'classe2', 'classe3')
    console.log(div.classList);

    // trocando classes
    div.classList.toggle('classe4') // tirei
    console.log(div.classList);

    div.classList.toggle('classe4') // coloquei
    console.log(div.classList);

    // trocando classes - usando o forced
    div.classList.toggle('classe4', true) // insere
    console.log(div.classList);

    div.classList.toggle('classe4', false) // tira
    console.log(div.classList);
 
    // o atributo classname 
    console.log(div.className); // pegando a classe
    div.className = 'classe1 classe2' // modificando a classe
    console.log(div.className);

