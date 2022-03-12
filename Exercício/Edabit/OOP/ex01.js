
// primeria forma
function addName(obj, name, value) {
    let objParams = {}
    Object.defineProperty(objParams, name, {value: value, enumerable: true})
    let junção = {}
    Object.assign(junção, obj, objParams)
    console.log(junção)
    
}

// segunda forma
function addName2(obj, name, value) {
    console.log({...obj, [name]: value})
}

addName({}, "Brutus", 300)
addName({piano: 500 }, "Brutus", 400)
addName({ piano: 500, stereo: 300 }, "Caligula", 440)
//addName2({ piano: 500, stereo: 300 }, "Caligula", 440)
addName2({nome: 'teste', idade: 90}, 'nada', 90)