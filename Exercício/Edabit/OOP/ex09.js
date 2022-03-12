


    function calculateLosses(obj) {

        let values = Object.values(obj)
        let sum = 0
        for(let value of values){
            sum += value
        }
        if (sum) return sum; else return 'Lucky you'
    }

    calculateLosses({nome: 'nada', idade: 30})