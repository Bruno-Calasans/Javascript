function generation(x, y) {

    const male = {
        '-3': 'great grandfather',
        '-2': 'grandfather',
        '-1': 'father',
        '0': 'me!',
        '1': 'son',
        '2': 'gradson',
        '3': 'great gradson'
    }
    
    const female = {
        '-3': 'great grandmother',
        '-2': 'grandmother',
        '-1': 'mother',
        '0': 'me!',
        '1': 'daughter',
        '2': 'graddaughter',
        '3': 'great graddaughter'
    }
    if(y == 'm') return male[x]; else return female[x]
}
console.log(generation(3, 'm'))