function afterNYears(names, n=0) {

    for (const name in names) {
        names[name] += Math.abs(n)
    }
    return names	
}

let obj = {teste: 10, nada: 30}

var {teste: teste } = obj
console.log(afterNYears(obj, 10))



