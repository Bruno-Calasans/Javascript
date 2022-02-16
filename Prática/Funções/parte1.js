

// declarando uma função - forma mais comun
function minhaFunção(){
    return 10
}

// chamando a função
console.log(minhaFunção())

// Expressão de função/função anônima
var x = function(a, b) {return a*b}

// chamando a função a partir de x
console.log(x(10, 20));

// função self-invoked
(
    function oi(){
        console.log('Olá')
    }
)()


// arrow function
const arrowFunction = (nome, sobrenome) => `${nome} ${sobrenome}`;
console.log(arrowFunction('James' ,'Jones'));

const msgBoasVindas = nome => 'Olá, '+ nome;
console.log(msgBoasVindas('John'))

