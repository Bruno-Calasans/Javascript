
function getBudgets(arr) {

    let sum = 0
    for (const element of arr) {
        sum += element['budget']
    }
    return sum
}

let array = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
]

getBudgets(array)