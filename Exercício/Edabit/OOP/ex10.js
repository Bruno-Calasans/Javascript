function freeShipping(order) {
    let values = Object.values(order)
    let sum = 0

    for (const value of values) {
        sum += value
    }
    if(sum > 50) return true; else return false
	
}