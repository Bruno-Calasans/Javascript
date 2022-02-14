
/** métodos RegExs mais comuns do JS **/

// Usando métodos RegEx
let string = 'abcd EFGH 1234'
let padrão = /EF/

// usando search()
console.log(string.search(padrão))

// usando o replace()
let string = 'abcd EFGH 1234'
let padrão = /EF/
console.log(string.replace(padrão, 'xx'))

// usando o test()
let string = 'abcd EFGH 1234'
let padrão = /EF/

if(/123/.test(string))
    console.log('Padrão encontrado')

else
    console.log('Padrão não encontrado')


// usando o exec()
let string = 'abcd EFGH 1234'
let padrão = /EF/

console.log(padrão.exec(string))

// usando o exec()
let string = 'amigo assim a gente gosta'
let padrão = /a/

console.log(string.match(padrão))

// usando o exec()
let string = 'aAa1'
let padrão = /(?=[A-Z])(?=[a-z])(?=\d)/

console.log(padrão.test(string))

