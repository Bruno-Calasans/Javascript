
function funcQuadratica(a, b, c){

    const delta = (b**2) - (4 * a * c)
    console.log(delta)

    if (delta < 0){
        return 'Delta é negativo'

    }else{
        const x1 = (-b + Math.sqrt(delta)) / (2*a)
        const x2 = (-b - Math.sqrt(delta)) / (2*a)
        return [x1, x2]
    }
}

console.log(funcQuadratica(1, 3, 2))
console.log(funcQuadratica(3, 1, 2))
console.log(funcQuadratica(1, -5, 6))
