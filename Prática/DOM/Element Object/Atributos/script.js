
    // manipulando atributos ---------------------------------------------------

    // pegando o valor de um atributo
    let exemplo1 = document.getElementById('divExemplo1')
    let id = exemplo1.getAttribute('id')
    console.log(id);

    // pegando o atibuto na forma de node
    let idNode = exemplo1.getAttributeNode('id')
    console.log(idNode);

    // verificando atributos
    console.log(exemplo1.hasAttribute('class')); // false
    console.log(exemplo1.hasAttributes()); // true

    // removendo atributos usando removeAttribute
    console.log(exemplo1);
    console.log(exemplo1.removeAttribute('title'));
    console.log(exemplo1);

    // removendo atributo usando o removeAttributeNode
    console.log(exemplo1);
    let node = exemplo1.getAttributeNode('id')
    console.log(exemplo1.removeAttributeNode(node));
    console.log(exemplo1);

    // modificando atributos usando setAttribute()
    exemplo1.setAttribute('id', 'novoId')
    console.log(exemplo1);

    // criando atributos usando setAttribute()
    exemplo1.setAttribute('class', 'classeExemplo1')
    console.log(exemplo1);

    // criando attribute node
    let title = document.createAttribute('title')
    title.value = 'titleExemplo'

    // inserindo um attribute node no elemento
    exemplo1.setAttributeNode(title)
    console.log(exemplo1);

    // usando a propriedade attibutes -----------------------------------------
    let exemplo2 = document.getElementById('divExemplo2')
    // mostrando o atributo 'attributes'
    console.log(exemplo1.attributes);

    // acessando o primeiro atributo
    console.log(exemplo1.attributes[0]);
    console.log(exemplo1.attributes[0].nodeType); // 2 = attribute node

    // propriedades de attributes

    console.log(exemplo1.attributes[0].name);
    console.log(exemplo1.attributes[0].value);
    console.log(exemplo1.attributes[0].specified);

    // pegando o attribute node
    console.log(exemplo1.attributes[0]); // forma normal
    console.log(exemplo1.attributes.getNamedItem('id')); // pelo nome
    console.log(exemplo1.attributes.item(0)); // pelo index

    // deletando um attribute node
    console.log(exemplo1.attributes.removeNamedItem('id'));
    console.log(exemplo1.attributes);

    // inserindo attribute node no array namedNodeMap
    let novoId = document.createAttribute('id')
    novoId.value = 'novoId'
    exemplo2.attributes.setNamedItem(novoId)


    
    