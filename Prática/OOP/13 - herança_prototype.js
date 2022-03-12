
    // herança usando prototype
    Object.prototype.teste = 'sou um teste'
    const avo = {a: 100}
    const pai = {__proto__: avo, b: 0, c: 50}
    const filho = {__proto__: pai, d: 666}

    console.log(avo.__proto__)
    console.log(pai.__proto__)
    console.log(filho.__proto__)

    // cadeia de prototypes
    console.log(Object.prototype.__proto__)
    console.log(avo.__proto__)
    console.log(pai.__proto__)
    console.log(filho.__proto__)

    // utilizando herança de protype como object.setPrototype()
    const animal = {
        nome: 'animal',
        info(){return 'Sou um animal'}
    }

    const gato = {
        nome: 'gato',
        info(){return 'sou um gato'},
        miar(){return 'Estou miando'}
    }

    const cachorro = {
        nome: 'cachorro',
        info(){return 'Sou um cachorro'},
        latir(){return 'Estou latindo'}
    }

    Object.setPrototypeOf(gato, animal)
    console.log(gato.nome)
    console.log(gato.info())
    console.log(gato.miar())

    Object.setPrototypeOf(cachorro, animal)
    console.log(cachorro.nome)
    console.log(cachorro.info())
    console.log(cachorro.latir())

    // usando Object.create()
    const objetoPai = {nome: 'James', idade: 30, info(){return 'Sou o Pai'}}
    const objetoFilho = Object.create(objetoPai, {
        nome: {value: 'Fernando', enumerable: true, writable: true},
        info: {value: function(){return 'Sou o filho'}, enumerable: true, writable: true}
    })

    console.log(objetoFilho.info())
   
    