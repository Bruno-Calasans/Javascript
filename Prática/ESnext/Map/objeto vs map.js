

// objeto vs map ---------------------------------------------------------------

// inicialização ---------------------------------------------------------------


// inicializando objetos
const obj1 = {} 
const obj = {nome: 'objeto', desc: 'sou um objeto'}

const obj3 = Object.create(null)
const obj4 = new Object

// inicializando maps
const map1 = new Map()
const map = new Map([['chave1', 'valor1'], ['chave2', 'valor2']])

// acessando elemenmtos --------------------------------------------------------

// em objetos
obj.nome
obj['nome']

// em maps
map.get('chave1')

// verificando se as chaves existe ---------------------------------------------

// em objetos
console.log(obj.id == undefined);
console.log('id' in obj); 

// em maps
console.log(map.has('chave1'));


// adicionando novo elemento ---------------------------------------------------

// em objetos
obj.id = 0
obj['id'] = 100
console.log(obj);

// em maps
map.set('id', 0)
map.set('id', 100)
console.log(map);

// removendo elementos ---------------------------------------------------------

// em objetos
delete obj.id
obj.clear = () =>{

    for(let atributo in obj){
        delete obj[atributo]
    }
}
//obj.clear() // para fazer a mesma coisa que o map


// em maps
map.delete('chave1')
//map.clear()

// obtendo o tamanho -----------------------------------------------------------

// em objetos
let chaves = Object.keys(obj)
console.log(chaves.length);

// em maps
console.log(map.size);

// iterando --------------------------------------------------------------------

// para objeto
for(let atributo in obj){
    console.log(atributo);
}

// para maps
for(let [chave, valor] of map){ // usando o for..in
    console.log(chave, valor);
}

map.forEach((e, c) => console.log(e, c)) // usando o forEach

