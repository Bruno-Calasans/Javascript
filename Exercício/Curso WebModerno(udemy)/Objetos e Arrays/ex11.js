
// solução 1
function firstLast1(array=[]){
    let first = array.shift()
    let last = array.pop()
    return [first, last]
}
console.log(firstLast1([10, 9, 39, 45, 79]))

// solução 2
function firstLast2(array=[]){

    let first = array.slice(0, 1)
    let last = array.slice(-1, -1)
    return first.concat(last)
}
console.log(firstLast2([90, 10, 20, 30, 30]))
