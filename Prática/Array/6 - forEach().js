

    // loop forEach
    let pessoas = ['João', 'Maria', 'Pedro', 'Fábio', 'Mônica']

    // exemplo 1
    pessoas.forEach(function(elemento, index){
        console.log(`${index}:${elemento}`)
    })

    // exemplo 2
    pessoas.forEach(function(elemento){
        console.log(elemento)
    })

    // exemplo 3
    pessoas.forEach((elemento) => {console.log(elemento)})

    // exemplo 4
    let mostrarElementos = elemento => {console.log(elemento)}
    pessoas.forEach(mostrarElementos)

    // criando o forEach2() -- primeira forma
    Array.prototype.forEach2 = function (callback){

        for(let key in this){
            if(this.includes(this[key])) callback(this[key], key, this)
        }
    }

    // criando um forEach3() - segunda forma
    Array.prototype.forEach3 = function (callback){

        for(let key = 0; key < this.length; key++){
            callback(this[key], key, this)
        }
    }


    let teste = ['nada', 'tudo', 20, true]

    teste.forEach2((a, b) => {

        console.log(a, b)
    })

    teste.forEach3((a, b) => {

        console.log(a, b)
    })
