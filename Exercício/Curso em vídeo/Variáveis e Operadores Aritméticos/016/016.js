// Criando números aleatórios 
var num = Math.floor(Math.random() * 10)+1
console.log(num)

//Criando uma função para isso
function randInt(min, max){
    let num = Math.floor(Math.random() * (max-min+1)) + min
    return num
}

console.log(randInt(1, 100))