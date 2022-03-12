
// solução 1
function areaDoTriangulo(base, altura){

    let area = ((base * altura) / 2).toFixed(2)
    return area
}

let x = areaDoTriangulo(10, 15) 
let y = areaDoTriangulo(7, 9) 
let z = areaDoTriangulo(9.25, 13.1) 
console.log(x, y, z)